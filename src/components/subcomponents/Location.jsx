import { SecondaryText } from "../../styles/styles.styled"

export const Location = ({ event }) => {
    return (
        <SecondaryText style={{textTransform:'capitalize'}}>
            <i className="fa-solid fa-location-dot"></i>
            {event.location ? `${event.location.substring(0, (event.location.lastIndexOf(',') - 3))}` : 'location'}
        </SecondaryText>
    )
}