import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Actionpost } from '../redux/Actionpost'
import { useForm } from "react-hook-form";
import { ActionCreatePost } from '../redux/ActionCreatePost';
import { ActionDeletePost } from '../redux/ActionDeletePost';
import { ActionEditPost } from '../redux/ActionEditPost';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(false);
  const [postID,setPostID] = useState();
  const [newTitle,setNewTitle] = useState();
  const [newDescription,setNewDescription] = useState();

  const data = useSelector((state)=>state.User_reducer.post);
  const Adata = useSelector((state)=>state.User_reducer.createPost);
  const Bdata = useSelector((state)=>state.User_reducer.deletePost);
  const Cdata = useSelector((state)=>state.User_reducer.editPost);

  const newData = data.posts

  useEffect(()=>{console.log("refresh")
   dispatch(Actionpost())
  },[Adata,Bdata,Cdata])
  
  const { handleSubmit,register } = useForm();
  
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/")
  }
  
  const onSubmit = (data) => {
  console.log("onSubmit",data);
   dispatch(ActionCreatePost(data))

  }

  const deletePost = (id) =>{
   console.log("deletePost",id);
   dispatch(ActionDeletePost(id))
  }

  const editPost = (id,tit,des) =>{
    console.log("editPost",id)
    setPostID(id)
    setOpened(true)
    setNewTitle(tit)
    setNewDescription(des)

  }

  const updateNewPost = () =>{
    console.log(2323,newTitle,newDescription)
    let body = {
      newTitle,
      newDescription
    }
    console.log(3434,body);
    dispatch(ActionEditPost(body,postID))
  }
  
  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update"
      >
        <p>Title</p>
        <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
        <br />
        <p>Description</p>
        <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
        <br /><br />
        <Button onClick={()=>updateNewPost()}>Update</Button>
      </Modal>


    <div className='btns'>
    <a href='/'  className="btn btn-danger" onClick={logout}>logout</a>
    </div>


  <div className="card-header">
  <form onSubmit={handleSubmit(onSubmit)}>
    <input placeholder='Title' {...register("title")}/>
    <input placeholder='Discription' {...register("description", { required: true })}/>
    <button type='submit' className="btn btn-warning" >Create Post</button>
    </form>
  </div>

    <button className="btn btn-info" >Profiles</ button>
  <table className="table table-striped table-dark container" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {newData?.map((item)=>
  <tbody >
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>deletePost(item.id)}>Delete</button>
        <button className="btn btn-success" onClick={()=>editPost(item.id, item.title, item.description)}>Edit</button>
      </td>
    </tr>
    
   
  </tbody>
)}
</table>

    </>
  )
}

export default Dashboard