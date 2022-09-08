import { SecondaryBtn } from "./buttons.styled"

export const SecondaryButton = ({ content, action }) => {
    return (
        <SecondaryBtn onClick={action} >
            {content}
        </SecondaryBtn>
    )
}