import { BackArrowButton } from "./buttons.styled"

export const BackButton = ({callback}) => {
    return(
        <BackArrowButton onClick={callback}>
            <i className="fa-solid fa-arrow-left"></i>
        </BackArrowButton>
    )
} 

