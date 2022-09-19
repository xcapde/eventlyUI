import { CancelBtn } from "./buttons.styled"

export const CancelButton = ({ content, callback }) => {
    return (
        <CancelBtn onClick={() => callback()}>
            {content}
        </CancelBtn>
    )
}