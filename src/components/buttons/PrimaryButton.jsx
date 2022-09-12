import { MainButton } from "./buttons.styled"

export const PrimaryButton = ({ content, callback }) => {
    return (
        <MainButton onClick={callback}>
            {content}
        </MainButton>
    )
}

// height={height} width={width} fontSize={fontSize}