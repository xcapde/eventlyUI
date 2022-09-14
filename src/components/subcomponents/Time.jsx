import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Time = ({event}) => {
    
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-clock"></i>   
            </DetailIcon> 
            <DetailText>
                {event.hour}
            </DetailText>
        </Row>
    )
}