import { LinkBtn } from "./buttons.styled"

export const LinkButton = ({ content, callback }) => {
    return (
        <LinkBtn onClick={callback}>
            {content}
        </LinkBtn>
    )
}