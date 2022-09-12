import { DetailText } from "../../styles/styles.styled"

export const Url = ({event}) => {
    return (
        <DetailText>
            <i className="fa-solid fa-link"></i> <a href="http://localhost:3000/home">{event.url}</a> 
        </DetailText>
    )
}