import { BackArrowButton } from "./buttons.styled";

export const BackButton = ({ callback }) => {
    return (
        <BackArrowButton onClick={callback} />
    )
}

