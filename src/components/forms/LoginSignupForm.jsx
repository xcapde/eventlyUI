import React, { useEffect, useState } from "react";
import { FormButton } from "../buttons/FormButton";
import { Input, Form, FormControl } from "./form.styled";



export function LoginSignupForm({ location, login, signup }) {

    const [isSignup, setIsSignup] = useState(false);
    const [inputsData, setInputsData] = useState({ username: "", name: "", surname: "", email: "", password: "" });

    useEffect(() => {
        setIsSignup(location === 'sign up')
    }, [location])

    const onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputsData({ ...inputsData, [name]: value });
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        let userData = {
            username: inputsData.username,
            password: inputsData.password
        }
        location === 'sign up' ? signup(inputsData) : login(userData);
        setInputsData({})
    };

    return (
        <Form onSubmit={onSubmitHandle}>
            <FormControl>
                {isSignup &&
                    <React.Fragment>
                        <Input onChange={onInputChange} placeholder="Name" name="name" value={inputsData.name || ""} />
                        <Input onChange={onInputChange} placeholder="Surname" name="surname" value={inputsData.surname || ""} />
                    </React.Fragment>}
                <Input onChange={onInputChange} placeholder="Username" name="username" value={inputsData.username || ""} />
                {isSignup && <Input onChange={onInputChange} placeholder="Email" name="email" value={inputsData.email || ""} />}
                <Input onChange={onInputChange} placeholder="Password" name="password" value={inputsData.password || ""} type="password" />
            </FormControl>
            <FormButton content={isSignup ? 'Sign up' : 'Log in'} />
        </Form>
    )
}