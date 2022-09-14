import { JoinBtn } from "./buttons.styled"

export const JoinButton = ({ content, callback }) => {
    return (
        <JoinBtn onClick={() => callback()}>
            {content}
        </JoinBtn>
    )
}