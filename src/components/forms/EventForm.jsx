import React, { useState, useEffect } from "react";
import { FormButton } from "../buttons";
import { Form } from "./form.styled";
import { FormControlInput } from "./FormControlInput";
import { FormControlSelect } from "./FormControlSelect";

export const EventForm = ({ eventToUpdate, postEvent, updateEvent }) => {

    const [event, setEvent] = useState(
        {
            title: eventToUpdate ? eventToUpdate.title : "",
            description: eventToUpdate ? eventToUpdate.description : "",
            type: eventToUpdate ? eventToUpdate.type : "",
            date: eventToUpdate ? eventToUpdate.date : ""
        });

    const eventTypes = ["offline", "online"];

    useEffect(() => {
        if (!eventToUpdate) return;
        setEvent({
            title: eventToUpdate.title,
            description: eventToUpdate.description,
            type: eventToUpdate.type,
            date: `${eventToUpdate.date.split("-").reverse().join("-")}T${eventToUpdate.hour}`
        })
    }, [eventToUpdate]);


    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(event);
        //validation
        eventToUpdate ? updateEvent(event) : postEvent(event);
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
                    {!field.includes("type") && <FormControlInput key={key} field={field} data={event} callback={setEvent} />}
                    {field.includes("type") &&
                        <FormControlSelect key={key} field={field} data={event} callback={setEvent} options={["", ...eventTypes]} />}
                </React.Fragment>
            ))}
            <FormButton content={eventToUpdate ? "Update" : "Upload"} />
        </Form>
    )
}