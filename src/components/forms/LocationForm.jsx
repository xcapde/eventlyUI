import { useState } from "react";
import { FormButton } from "../buttons";
import { FormGrid } from "./form.styled";
import { FormControlInput } from "./FormControlInput";

export const LocationForm = ({ addDirection, addWebUrl, event }) => {

    const direction = {
        country: "",
        province: "",
        city: "",
        street: "",
        building: "",
        door: ""
    }

    const webUrl = {
        url: ""
    }

    const style = {grid: 'auto', inputWidth: 'var(--input-width)'}

    const [formData, setFormData] = useState(event.type.includes("online") ? webUrl : direction);
    const [styles, setStyles] = useState(event.type.includes("online") ? style : {});


    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        event.type.includes("online") ? addWebUrl(formData) : addDirection(formData);
    }

    console.log(event, formData)
    console.log(Object.keys(formData).length)
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
            <FormButton content={'Add direction!'} />
        </FormGrid>
    )
}