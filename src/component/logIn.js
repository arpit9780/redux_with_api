import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ActionLogin } from '../redux/ActionLogin';
import NavbarLog from './Navbarlog';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useEffect } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const myFunc = () => {
    navigate("/dashboard")
    toast.success('🦄 Login Successfull', {
      position: toast.POSITION.TOP_RIGHT,
      draggable: true,
    });
  }
  const onSubmit = (data) => {
    dispatch(ActionLogin(data, myFunc))
  }
  // const errorToast = () => {
  //   toast("Error", {
  //       className: "Custom-toast",
  //       draggable: true,
  //       position: toast.POSITION.TOP_RIGHT
  //   })
  // }
  return (
    <>
      <center>
        <div className="container-su">
          <form
            const onSubmit={handleSubmit(onSubmit)}>

            <h4>LOG In</h4>
            <h6>E-Mail : </h6>
            <input className="inpt" type="email" placeholder="eg. arpityuva@gmail.com"
              {...register("email", { required: true })} />
            {errors.email && <span className="err">This field is required</span>}

            <h6>Password : </h6>
            <input className="inpt" type={eye ? "text" : "password"} placeholder="eg. Arpit@987"
              {...register("password", {
                required: "plzz fill password", minLength: {
                  value: 4,
                  message: "plzz fill minimum 4 char"
                }
              })} />
            {eye ?
              <AiOutlineEyeInvisible className='akh' onClick={() => { setEye(false) }} />
              :
              <AiOutlineEye className='akh' onClick={() => { setEye(true) }} />}
            {errors.password && <span className="err">{errors.password.message}</span>}

            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      </center>
    </>
  )
}

export default LogIn;