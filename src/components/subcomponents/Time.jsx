import { DetailText } from "../../styles/styles.styled"

export const Time = ({event}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-clock"></i>{event.hour}   
        </DetailText> 
    )
}