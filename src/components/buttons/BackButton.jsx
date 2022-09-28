import { BackArrowButton } from "./buttons.styled";

export const BackButton = ({ callback, color }) => {
    return (
        <BackArrowButton color={color} onClick={callback} />
    )
}

