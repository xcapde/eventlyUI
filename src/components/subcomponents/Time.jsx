import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Time = ({event}) => {
    
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-clock"></i>   
            </DetailIcon> 
            <DetailText style={{fontFamily:'var(--numbers-font)', fontWeight:'500'}}>
                {event.hour}
            </DetailText>
        </Row>
    )
}