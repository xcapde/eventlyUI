import { FormCntrl, Input, Label } from "./form.styled"

export const FormControl = ({ data, field, callback }) => {

    return (
        <FormCntrl>
            <Input id="input" 
                onChange={(e) => callback({ ...data, [e.target.name]: e.target.value })}
                onFocus={(e) => e.target.select()}
                value={data[field]}
                name={field}
                type={field.includes("password") ? "password" :
                field.includes("date") ? 'datetime-local' : 'text'}
                required
            />
            <Label id="input-label" display={data[field] !== "" ? 'none' : ''}>{field}</Label>
            
        </FormCntrl>
    )
}