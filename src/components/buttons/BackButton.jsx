import { BackArrowButton } from "./buttons.styled"

export const BackButton = ({action}) => {
    return(
        <BackArrowButton onClick={action}>
            <i className="fa-solid fa-arrow-left"></i>
        </BackArrowButton>
    )
} 

