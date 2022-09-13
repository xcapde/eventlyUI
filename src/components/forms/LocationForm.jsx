import { useEffect } from "react";
import { useState } from "react";
import { FormButton } from "../buttons";
import { FormGrid } from "./form.styled";
import { FormControlInput } from "./FormControlInput";

export const LocationForm = ({ addDirection, addWebUrl, event, eventDirection, next }) => {

    const direction = {
        country: "",
        province: "",
        city: "",
        street: "",
        building: "",
        door: ""
    }

    const webUrl = {
        url: event.location ? event.location : ""
    }

    const style = {grid: 'auto', inputWidth: 'var(--input-width)'}

    const [formData, setFormData] = useState(event.type.includes("online") ? webUrl : direction);
    const styles = event.type.includes("online") ? style : {};
    const s = 1;
    const ms = s * 1000;
    
    useEffect(()=>{
        if(!event.location) return;
        if(!eventDirection) return;
        // setFormData({});
        event.type.includes("online") ? setFormData(event.location):
        setFormData(eventDirection);
    },[eventDirection]);    

    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        event.type.includes("online") ? addWebUrl(formData) : addDirection(formData);
        setTimeout(next, ms)
    }

    return (
        <FormGrid styles={styles} onSubmit={handleSubmit}>
            {Object.keys(formData).map((field, key) => (
                <FormControlInput
                    key={key}
                    field={field}
                    data={formData}
                    callback={setFormData}
                />
            ))}
            <FormButton content={!event.location ? "Add" : "Update"} />
        </FormGrid>
    )
}