import { DetailText } from "../../styles/styles.styled"

export const EventLocation = ({ location }) => {
    console.log(location)
    return (
        <DetailText>
            <i className="fa-solid fa-location-dot"></i>
            {location ? `    ${location.substring(0, (location.lastIndexOf(',') - 3))}` : 'location'}
        </DetailText>
    )
}