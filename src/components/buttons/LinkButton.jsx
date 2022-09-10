import { LinkBtn } from "./buttons.styled"

export const LinkButton = ({ content, callback, disabled }) => {

    return (
        <LinkBtn onClick={!disabled ? () => callback() : () => console.error("button disabled")}>
            {content}
        </LinkBtn>
    )
}