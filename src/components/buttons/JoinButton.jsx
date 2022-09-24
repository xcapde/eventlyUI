import { JoinBtn } from "./buttons.styled"

export const JoinButton = ({ content, callback, widthD }) => {
    return (
        <JoinBtn widthD={widthD} onClick={() => callback()}>
            {content}
        </JoinBtn>
    )
}