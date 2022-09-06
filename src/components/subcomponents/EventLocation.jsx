import { DetailText } from "../../styles/styles.styled"

export const EventLocation = ({location}) => {
    return (
        <DetailText>
            {/* <i className="fa-solid fa-location-dot"></i> {location}  */}
            <i className="fa-solid fa-location-dot"></i> location 
        </DetailText>
    )
}