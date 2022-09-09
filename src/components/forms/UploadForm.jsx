import React, { useState, useEffect } from "react";
import { FormButton } from "../buttons";
import { Form, Input, Select } from "./form.styled"

export const UploadForm = ({ postEvent }) => {

    const [event, setEvent] = useState(
        {
            title: "",
            description: "",
            type: "",
            date: ""
        });

    const eventTypes = ["offline", "online"];

    useEffect(() => { }, [event]);


    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(event);
        //callback from parent to call API
        postEvent(event);
        resetValues();
    }

    const resetValues = () => {
        setEvent({
            title: "",
            description: "",
            type: "",
            date: ""
        });
    }

    return (
        <Form onSubmit={handleSubmit} style={{ gap: '15px' }}>
            {Object.keys(event).map((field, key) => (
                <React.Fragment key={key}>
                    {field !== 'type' ?
                        <Input
                            name={field}
                            type={field !== 'date' ? "text" :
                                "datetime-local"}
                            value={event.field} placeholder={field}
                            onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })} /> :

                        <Select name={field} onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}>
                            {eventTypes.map((option, key) => (
                                <option key={key} value={option} name={field}
                                >{option}</option>
                            ))}
                        </Select>
                    }
                </React.Fragment>
            ))}
            <FormButton content={"Upload"} />
        </Form>
    )
}