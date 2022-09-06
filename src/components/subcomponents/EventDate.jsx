import { DetailText } from "../../styles/styles.styled"

export const EventDate = ({event}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-calendar-day"></i> {event.date}
        </DetailText>
    )
}