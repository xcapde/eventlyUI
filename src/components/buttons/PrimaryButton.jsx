import { MainButton } from "./buttons.styled"

export const PrimaryButton = ({ content, action, height, width, fontSize }) => {
    return (
        <MainButton onClick={action} height={height} width={width} fontSize={fontSize}>
            {content}
        </MainButton>
    )
}