import { Modal } from '@mantine/core'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/actions/PostActions';

export const UpdateViaModel = (props) => {
  const dispatch = useDispatch()
  const [newTitle, setNewTitle] = useState(props.post.title);
  const [newDescription, setNewDescription] = useState(props.post.description);
 
  const UpdatePost =(newTitle,newDescription)=>{
    const id = props.post.id
      const data = {
        title : newTitle,
        description : newDescription
      }
      dispatch(updatePost(data,id))
  }
 
  return (<>
    <Modal
        opened={props.isOpen}
        onClose={props.setIsOpen}
        title="Update"
      >
        <p>Title</p>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
       
        <p>Description</p>
        <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
      
        <button onClick={()=>{UpdatePost(newTitle, newDescription);props.setIsOpen(false)}}>Update</button>
      </Modal> 
    </>
  )
}
