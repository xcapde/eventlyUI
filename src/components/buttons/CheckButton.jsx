import { ConfirmBtn } from "./buttons.styled"

export const ConfirmButton = ({ content, callback }) => {
    return (
        <ConfirmBtn onClick={() => callback()}>
            {content}
        </ConfirmBtn>
    )
}