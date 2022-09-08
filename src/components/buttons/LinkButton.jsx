import { LinkBtn } from "./buttons.styled"

export const LinkButton = ({ content, action }) => {
    return (
        <LinkBtn onClick={action}>
            {content}
        </LinkBtn>
    )
}