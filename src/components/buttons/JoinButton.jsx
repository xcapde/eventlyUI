import { JoinBtn } from "./buttons.styled"

export const JoinButton = ({ content, callback, color }) => {
    return (
        <JoinBtn onClick={() => callback()} style={{backgroundColor:color}}>
            {content}
        </JoinBtn>
    )
}