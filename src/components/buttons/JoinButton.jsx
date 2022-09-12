import { FormBtn } from "./buttons.styled"

export const JoinButton = ({ content }) => {
    return (
        <FormBtn style={{width:'100%'}}>
            {content}
        </FormBtn>
    )
}