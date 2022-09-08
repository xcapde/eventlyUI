import { DetailText } from "../../styles/styles.styled"

export const EventDate = ({date}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-calendar-day"></i> {date.split("-").join("/")}
        </DetailText>
    )
}