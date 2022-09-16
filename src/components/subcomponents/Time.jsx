import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Time = ({event}) => {
    
    return (
        <Row style={{width: 'fit-content'}}>
            <DetailIcon>
                <i className="fa-solid fa-clock"></i>   
            </DetailIcon> 
            <DetailText style={{fontFamily:'var(--numbers-font)', fontWeight:'500', width:'100%'}}>
                {event.hour}
            </DetailText>
        </Row>
    )
}