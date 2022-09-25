import { useEffect } from "react";
import { useState } from "react";
import { FormButton } from "../buttons";
import { FormGrid } from "./form.styled";
import { FormControlInput } from "./FormControlInput";

export const LocationForm = ({ event, addDirection, addWebUrl, eventDirection, eventUrl, next }) => {

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

    const style = { grid: 'auto', inputWidth: 'var(--input-width)', placeContent:'center'}

    const [formData, setFormData] = useState();
    const [styles, setStyles] = useState();
    const s = 1;
    const ms = s * 1000;

    useEffect(() => {
        if (!event) return;
        event.type.includes("online") ? setFormData(eventUrl ? eventUrl : webUrl) : setFormData(eventDirection ? eventDirection : direction);
        event.type.includes("online") ? setStyles(style) : setStyles({placeContent:'flex-start'});
         // eslint-disable-next-line
    }, [event, eventUrl, eventDirection]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        event.type.includes("online") ? addWebUrl(formData) : addDirection(formData);
        setTimeout(next, ms)
    }

    if (styles)
        return (
            <FormGrid styles={styles} placeContent={ event.type.includes("online") ? 'center' : "flex-start"} onSubmit={handleSubmit}>
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