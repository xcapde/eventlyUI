import { FormCntrl, Input, Label } from "./form.styled"

export const FormControlInput = ({ data, field, callback }) => {

    console.log(data[field])
    return (
        <FormCntrl>
            <Input
                onChange={(e) => callback({ ...data, [e.target.name]: e.target.value })}
                onFocus={(e) => e.target.select()}
                value={data[field]}
                name={field}
                type={field.includes("password") ? "password" :
                field.includes("date") ? 'datetime-local' : 'text'}
                required
            />
            <Label display={field.includes("date") ? 'none' : ''}>{field}</Label>
            
        </FormCntrl>
    )
}