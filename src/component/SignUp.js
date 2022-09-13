import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get_register } from '../redux/ActionSignup';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(23, data);
        dispatch(get_register(data))  
       
           
    }
    return (
        <>
            <div className='main'>
            <div className="cardd">
                    <div className="imgBx">
                        <img src="../assets/as.png" />
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
                            <center>
                                <button className="btn btn-outline-primary" type="submit"> Submit </button>
                            </center>
                        </form>

                   
            
            </div>
            </div>
      

        </>
    )
}

export default SignUp;