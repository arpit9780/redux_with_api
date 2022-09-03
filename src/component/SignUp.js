import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { get_register } from '../redux/actions';
import NavbarLog from './Navbarlog';


function SignUp() {
    //
    // const {users}=useSelector(state=>state.User_reducer)  
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(23, data);
        dispatch(get_register(data))  
           
    }
    return (
        <>
            <div>
                <center>
                    <div className="container-su">
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
                </center>
            </div>

      

        </>
    )
}

export default SignUp;