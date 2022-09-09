import { SecondaryBtn } from "./buttons.styled"

export const SecondaryButton = ({ content, callback }) => {
    return (
        <SecondaryBtn onClick={callback} >
            {content}
        </SecondaryBtn>
    )
}