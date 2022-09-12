import { DetailText } from "../../styles/styles.styled"

export const Date = ({event}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-calendar-day"></i>{event.date.split("-").join("/")}
        </DetailText>
    )
}