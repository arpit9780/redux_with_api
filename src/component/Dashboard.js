import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { createPost, deletePost, getPostData } from '../redux/actions/PostActions';
import { useNavigate } from 'react-router-dom';
import { UpdateViaModel } from './UpdateViaModel';
import { NewPostCreate } from './NewPostCreate';



function Dashboard() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [searchArr, setSearchArr] = useState()
  const [isVisibleModal,setIsVisibleModal] = useState(false)
  const [isVisibleCreate,setIsVisibleCreate] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [post,setPost] = useState("")
  const [loading , setLoading] = useState(false)

  const data = useSelector((state) => state.PostReducer?.post?.posts);
 

  useEffect(() => {
    dispatch(getPostData())
  },[data])


  const logout = () => {
    setLoading(true)
   localStorage.removeItem("token");
    // window.location.href = "/login"
    navigate("/login")
  }

 

  const postDataDelete = (id) => {
    dispatch(deletePost(id));
  }

  const postDataEdit = (item) => {
    setPost(item)
    setIsOpen(true)
    setIsVisibleModal(true)

  }

 

  const searchText = (e) => {
    setSearch(e.target.value)
    const filteredData = data?.filter((el,i) => {
      if (!search) {
        return el
      }
      else {
        return el.title.toLowerCase().includes(e.target.value.toLowerCase())
      }
    })
    setSearchArr(filteredData)
  }

  const onClickHandle = () =>{
    setIsVisibleCreate(true)
    setIsOpen(true)
  } 
  return (
    <>
     <div className='btns'>
        <button className="btn btn-danger" onClick={()=>logout()}>  {loading?
             <ClipLoader loading={loading}  size={20} />
              :" logout"}</button>
      </div>


      <div className="card-header createBar">
      <button className="btn btn-warning" onClick={onClickHandle} >Create Post</button>
      </div>

      <div className='searchBar'>
        <input type="text" placeholder='Search' onChange={(e) => { searchText(e) }} />
      </div>
      
    
     
      <table className="table table-striped table-dark container" style={{marginTop:"50px"}}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody >
          {!search  ?
           data?.map((item,i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => postDataDelete(item.id)}>Delete</button>
                    <button className="btn btn-success" onClick={() => postDataEdit(item)}>Edit</button>
                  </td>
                </tr>
              )}) 
              :
            searchArr?.map((item,i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => postDataDelete(item.id)}>Delete</button>
                    <button className="btn btn-success" onClick={() => postDataEdit(item)}>Edit</button>
                 </td>
                </tr>
              )})
          }
        </tbody>
      </table> 
    {isVisibleModal?<UpdateViaModel isOpen={isOpen} setIsOpen={setIsOpen} post={post}/>:null}
    {isVisibleCreate?<NewPostCreate isOpen={isOpen} setIsOpen={setIsOpen}/>: null}
     
    </>
  )
}

export default Dashboard




