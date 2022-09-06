import { DetailText } from "../../styles/styles.styled"

export const EventUrl = ({url}) => {
    return (
        <DetailText>
            {/* <i className="fa-solid fa-location-dot"></i> <a href="http://localhost:3000/">Enllaç</a>  */}
            <i className="fa-solid fa-link"></i> <a href="http://localhost:3000/">Pàgina Web</a> 
        </DetailText>
    )
}