import React from 'react'
import { useNavigate } from "react-router-dom";
import classes from './Login.module.css'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import image from '../../assests/pexels-sharad-kachhi-3937174.jpg'

const Login = ({ongetInfo}) => {

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        ongetInfo(data)
        navigate("/dashboard", { replace: true });
        
       
    }
    console.log(errors);
    return (
        <>
            <div className={classes.loginWrap}>
                <div className={classes.image}>
                    <img src={image} alt='desktop setup' />
                </div>

                <div className={classes.formcontainer}>
                    <h1>Hello There!</h1>
                    <p>Are you new here? please sign up!</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="First name" {...register("Firstname", { required: '⚠ First name is required', maxLength: 80 })} />
                        <ErrorMessage className={classes.ErrorMessage} errors={errors} name="Firstname" as="i" />

                        <input type="text" placeholder="Last name" {...register("Lastname", { required: '⚠ Last name is required', maxLength: 100 })} />
                        <ErrorMessage className={classes.ErrorMessage} errors={errors} name="Lastname" as="i" />

                        <input type="text" placeholder="Email" {...register("Email", { required: '⚠  A valid is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid' } })} />
                        <ErrorMessage className={classes.ErrorMessage} errors={errors} name="Email" as="i" />

                        <input type="tel" placeholder="Mobile number" {...register("Mobilenumber", {
                            required: '⚠  A Mobile is required',minLength: {
                                value: 6,
                                message: 'Invalid number.',
                            }
                        })} />
                        <ErrorMessage className={classes.ErrorMessage} errors={errors} name="Mobilenumber" as="i" />

                        <select {...register("Title", { required: true })}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                        </select>

                        <button type="submit" className={classes.submit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login