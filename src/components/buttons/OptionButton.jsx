import { OptionBtn } from "./buttons.styled"

export const OptionButton = ({ content, callback }) => {
    return (
        <OptionBtn onClick={callback}>
            {content}
        </OptionBtn>
    )
}
