import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect } from "react-router";
import { TodoContext } from "./Context/TodoContext";

type Inputs = {
  email: string,
  password: string,
};


export const LoginPage: React.FC = () => { 
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm<Inputs>();

    const {login, authenticated } = useContext(TodoContext);

    const onSubmit = (data: any) => {
        console.log(data);
        login(data);
    };
    if (authenticated) {
        return <Redirect to="/" />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("email")} />
        
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" />
        </form>
    );
}