import { DetailText } from "../../styles/styles.styled"

export const EventUrl = ({url}) => {
    return (
        <DetailText>
            <i className="fa-solid fa-link"></i> <a href="http://localhost:3000/home">Enllaç</a> 
        </DetailText>
    )
}