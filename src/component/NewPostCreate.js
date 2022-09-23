import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mantine/core';
import { createPost } from '../redux/actions/PostActions';

export const NewPostCreate = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        dispatch(createPost(data))
        navigate("/dashboard")
      }

  return (<>
  <div className="card-header createBar">
  <Modal
        opened={props.isOpen}
        onClose={props.setIsOpen}
        title="Introduce yourself!"
      >
         <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Title' {...register("title")} />
          <input placeholder='Discription' {...register("description", { required: true })} />
          <button type='submit' className="btn btn-warning" onClick={()=>{props.setIsOpen(false)}}  >Create Post</button>
        </form> 
      </Modal>
  
        </div>
  </>
  )
}
