import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import styled from "styled-components";
import { TodoContext } from "./Context/TodoContext";

type Inputs = {
    name: string,
    email: string,
    password: string,
    age: number,
};


export const RegisterPage: React.FC = () => { 
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>();

    const {registerUser, authenticated } = useContext(TodoContext);

    const onSubmit = (data: any) => {
        console.log(data);
        registerUser(data);
    };
    // if (authenticated) {
    //     return <Redirect to="/" />
    // }

    return (
        <RegisterContainer>
            <RegisterHeader>
                Register your account
            </RegisterHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RegisterText>Name</RegisterText>
                <Input placeholder= "Enter your name"{...register("name")} />
                <RegisterText>Email</RegisterText>
                <Input placeholder= "Enter your email"{...register("email")} />
                <RegisterText>Password</RegisterText>
                <Input placeholder="Enter your password"{...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                <RegisterText>Age</RegisterText>
                <Input placeholder= "Enter your age"{...register("age")} />
                <ButtonContainer>
                    <ButtonInput type="submit" />
                </ButtonContainer>
            </form>
        </RegisterContainer>
    );
}
const RegisterContainer = styled.form`
    max-width: 500px;
    margin: 10px auto;
    padding: 20px 0;
    background-image: linear-gradient(#A48EC9, #8473D9);    
    border-radius: 5px;
`
const RegisterHeader = styled.div`
    padding: 10px 0;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    color: white;
`
const RegisterText = styled.div`
    padding: 10px;
    font-size: 18px;
    color: white;
`
const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    margin: 10px;
    background: white;
    border: none;
    border-radius: 3px;
    width: 90%;
`
const ButtonInput = styled.input`
    background-color: #4F49AF;
    width: 60%;
    height: 30px;
    color: white;
`
const ButtonContainer = styled.div`
    color: white;
    border: none;
    margin: 10px;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 100;
    text-align: center;
`
