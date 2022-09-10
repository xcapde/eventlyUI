import { LinkBtn } from "./buttons.styled"

export const LinkButton = ({ content, callback, disabled }) => {

    return (
        <LinkBtn color={disabled ? 'var(--color-item-footer)' : ''} onClick={!disabled ? () => callback() : () => console.error("button disabled")}>
            {content}
        </LinkBtn>
    )
}