import { FormCntrl, Input, Label } from "./form.styled"

export const FormControlInput = ({ data, field, callback }) => {

    return (
        <FormCntrl>
            <Input
                onChange={(e) => callback({ ...data, [e.target.name]: e.target.value })}
                onFocus={(e) => e.target.select()}
                value={data[field]}
                name={field}
                type={field.includes("password") ? "password" :
                    field.includes("date") ? 'datetime-local' :
                        field.includes("building") || field.includes("door") ? 'number' :
                            field.includes("email") ? 'email' :
                                field.includes("url") ? 'url' : 'text'}
                required
            />
            <Label display={field.includes("date") ? 'none' : ''}>{field}</Label>
        </FormCntrl>
    )
}