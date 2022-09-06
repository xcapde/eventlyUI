import { DetailText } from "../../styles/styles.styled"

export const EventTime = ({hour}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-clock"></i> {hour}   
        </DetailText> 
    )
}