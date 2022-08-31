import React, { useEffect, useState } from "react";
import { FormButton } from "../buttons/FormButton";
import { Input, Form, FormControl } from "./form.styled";



export function LoginSignupForm({ location }) {


    const [isSignup, setIsSignup] = useState(false);

    useEffect(() => {
        setIsSignup(location === 'sign up')
    }, [location])

    return (
        <Form>
            <FormControl>
                {isSignup &&
                    <React.Fragment>
                        <Input placeholder="Name" />
                        <Input placeholder="Surname" />
                    </React.Fragment>}
                <Input placeholder="Username" />
                {isSignup && <Input placeholder="Email" />}
                <Input placeholder="Password" />
            </FormControl>
            <FormButton content={isSignup ? 'Sign up' : 'Log in'} action={'log in o sign in'}/>
        </Form>
    )
}