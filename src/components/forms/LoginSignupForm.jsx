import React, { useEffect, useState } from "react";
import { authService } from "../../services/API/authService";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../buttons/FormButton";
import { Input, Form, FormControl } from "./form.styled";
import { AuthService } from "../../services/AuthService";



export function LoginSignupForm({ location }) {

    const [isSignup, setIsSignup] = useState(false);
    const [inputsData, setInputsData] = useState({username:"", name:"", surname:"", email:"", password:""});
    const navigate = useNavigate();

    useEffect(() => {
        setIsSignup(location === 'sign up')
    }, [location])

    const onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputsData({...inputsData, [name]:value});
    }
    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        let userData={
            username : inputsData.username,
            password : inputsData.password
        }
        location === 'sign up'? signup() : login(userData);
    };

    const signup = () => {
        authService.signup(inputsData).then(res => {
            if(!res) return; 

            navigate("/log-in")
        }) 
    };

    const login = (data) => {
        authService.login(data).then(res => {
            if(!res) return;

            const authUser = {
                token: res.accessToken,
                username: res.username,
                id: res.id,
            };

            AuthService.saveAuthUser(authUser);
            navigate('/')
        })
        setInputsData({})
    };



    return (
        <Form onSubmit={onSubmitHandle}>
            <FormControl>
                {isSignup &&
                    <React.Fragment>
                        <Input onChange={onInputChange} placeholder="Name" name="name" value={inputsData.name || ""}/>
                        <Input onChange={onInputChange} placeholder="Surname" name="surname" value={inputsData.surname || ""} />
                    </React.Fragment>}
                <Input onChange={onInputChange} placeholder="Username" name="username" value={inputsData.username || ""}/>
                {isSignup && <Input onChange={onInputChange} placeholder="Email" name="email" value={inputsData.email || ""}/>}
                <Input onChange={onInputChange} placeholder="Password" name="password" value={inputsData.password || ""} type="password"/>
            </FormControl>
            <FormButton content={isSignup ? 'Sign up' : 'Log in'}/>
        </Form>
    )
}