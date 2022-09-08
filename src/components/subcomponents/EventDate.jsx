import { DetailText } from "../../styles/styles.styled"

export const EventDate = ({date, margin}) => {
    
    return (
        <DetailText margin={margin}>
            <i className="fa-solid fa-calendar-day"></i> {date.split("-").join("/")}
        </DetailText>
    )
}