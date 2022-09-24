import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Time = ({event, fontSize}) => {
    
    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-clock"></i>   
            </DetailIcon> 
            <DetailText fontFamily='var(--numbers-font)' fontWeight='500' width='100%' fontSize={fontSize}>
                {event.hour}
            </DetailText>
        </Row>
    )
}