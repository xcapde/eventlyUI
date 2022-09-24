import React, { useEffect, useState } from "react";
import { FormButton } from "../buttons/FormButton";
import { Form } from "./form.styled";
import { FormControlInput } from "./FormControlInput";

export function LoginSignupForm({ location, login, signup }) {

    const def = { username: "", name: "", surname: "", email: "", password: "" };
    const [user, setUser] = useState(def);

    useEffect(() => {
        defineUser();
         // eslint-disable-next-line
    }, [location])

    const defineUser = () =>{
        location.includes('log in') ?
            setUser({ username: "", password: "" }) :
            setUser(def);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let log = {
            username: user.username,
            password: user.password
        }
        location.includes('sign up') ? signup(user) : login(log);
        defineUser();
    };

    return (
        <Form justifyD={'center'} onSubmit={handleSubmit} justify={'center'}>
            {Object.keys(user).map((field, key) => (
                <FormControlInput key={key} field={field} data={user} callback={setUser} />
            ))}
            <FormButton content={location} />
        </Form>
    )
}