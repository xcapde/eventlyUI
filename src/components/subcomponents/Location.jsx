import { DetailText } from "../../styles/styles.styled"

export const Location = ({ event }) => {
    return (
        <DetailText style={{ textTransform: 'capitalize', lineHeight: '20px' }}>
            <i className="fa-solid fa-location-dot"></i>
            {event.location ? `${event.location.substring(0, (event.location.lastIndexOf(',') - 3))}` : 'location'}
        </DetailText>
    )
}