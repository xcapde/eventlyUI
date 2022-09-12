import { DetailText } from "../../styles/styles.styled"

export const Date = ({event, margin}) => {
    
    return (
        <DetailText margin={margin}>
            <i className="fa-solid fa-calendar-day"></i>{event.date.split("-").join("/")}
        </DetailText>
    )
}