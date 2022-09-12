import { SecondaryText } from "../../styles/styles.styled"

export const Date = ({event, margin}) => {
    
    return (
        <SecondaryText margin={margin}>
            <i className="fa-solid fa-calendar-day"></i>{event.date.split("-").join("/")}
        </SecondaryText>
    )
}