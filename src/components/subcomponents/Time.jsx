import { SecondaryText } from "../../styles/styles.styled"

export const Time = ({event}) => {
    
    return (
        <SecondaryText>
            <i className="fa-solid fa-clock"></i>{event.hour}   
        </SecondaryText> 
    )
}