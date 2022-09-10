import { FormCntrl, Label, Select } from "./form.styled"

export const FormControlSelect = ({ data, field, options, callback }) => {
    return (
        <FormCntrl>
            <Select
                onChange={(e) => callback({ ...data, [e.target.name]: e.target.value })}
                name={field}
                defaultValue={data[field] ? data[field] : options[0]}
                required
            >
                {options.map((option, key) => (
                    <option key={key} value={option} name={field} style={option === "" ? {display:'none'} : {display:'block'}}
                    >{option}</option>
                ))}
            </Select>
            <Label>{field}</Label>
        </FormCntrl>
    )
}