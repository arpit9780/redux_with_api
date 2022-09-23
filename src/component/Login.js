import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { GetLogin } from '../redux/actions/AuthAction';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const userData = useSelector((state)=>state.UserReducer)
  const error = useSelector((state) => state?.UserReducer?.error?.message)

  console.log("error",error)


  const onSubmit = (data) => {
    setLoading(true)
    dispatch(GetLogin(data))
  }
  
  useEffect(()=>{
    console.log("userDataError",userData.user?.message?.[0] )
    if(userData.user.success===true){
      toast.success(userData.user?.message?.[0]);
      window.location.href="/dashboard"
      // navigate("/dashboard")-
    }
    else {
      toast.error(error)
      navigate("/login")
    }
  },[userData])



  return (
    <>
      <div className='main'>
        <div className="cardd">
          <form
            const onSubmit={handleSubmit(onSubmit)}>
            <h4>Login Form</h4>
            <h5>Email :</h5>
            <input className="form-input" type="text" placeholder="Enter Email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: "",
                  message: "Email is not valid"
                }
              })} />

            <h5>Password :</h5>
            <input className="form-input" type={eye ? "text" : "password"} placeholder="Password"
              {...register("password", {
                required: "Password is Required",
              })} />
            {eye ?
              <AiOutlineEyeInvisible className='Password-eyeStyle' onClick={() => { setEye(false) }} />
              :
              <AiOutlineEye className='Password-eyeStyle' onClick={() => { setEye(true) }} />}
            {/* <span className="err">{errors.password.message}</span> */}
            <button className="btn" type="submit" style={{}}>
              {loading?
             <ClipLoader loading={loading}  size={20} />
              :" Submit"}
             
            </button>
            <p>You don't have an accout,<Link to="/signup">Create Account</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default Login;
