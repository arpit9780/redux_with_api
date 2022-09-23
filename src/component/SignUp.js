import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { GetSignup } from '../redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const successToast = useSelector((state)=>state?.UserReducer?.user)
    const errorToast = useSelector((state)=> state?.UserReducer?.error?.response?.data?.errors?.[0] )
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(65,errorToast)
    const onSubmit = (data) => {
        dispatch(GetSignup(data)) 
        setLoading(true) 
    }

    useEffect(()=>{
        console.log("userDataError",successToast.success )
        if(successToast.success ===true){
          console.log("msg",successToast?.message?.[0])
          toast.success(successToast?.message?.[0]);
          setLoading(false) 
        }
        else {
            toast.error(errorToast)
        }
      },[successToast,errorToast])
    return (
        <>
            <div className='main'>
            <div className="cardd">
                    <div className="imgBx">
                        <img src="../assets/as.png" alt='pp'/>
                    </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4>Create Account</h4>
                            <h6>E-Mail : </h6>
                            <input className="inpt" type="email" placeholder="enter email"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="err">This field is required</span>}


                            <h6>Password : </h6>
                            <input className="inpt" type="password" placeholder="enter password"
                                {...register("password", { required: true })} />
                            {errors.password && <span className="err">Wrong Password</span>}

                            <h6>Confirm Password : </h6>
                            <input className="inpt" type="password" placeholder="enter password"
                                {...register("password_confirmation", { required: true })} />
                            {errors.password_confirmation && <span className="err">Wrong Password</span>}
                            <br />
                                <button className="btn btn-outline-primary" type="submit">  {loading?
             <ClipLoader loading={loading}  size={20} />
              :" Submit"} </button>
                            <p>If you have already account,<a href="/login">LOGIN</a></p>
                        </form>

                   
            
            </div>
            </div>
      

        </>
    )
}

export default SignUp;