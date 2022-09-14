import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Date = ({event}) => {
    
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-calendar-day"></i>
            </DetailIcon>
            <DetailText style={{fontFamily:'var(--numbers-font)', fontWeight:'500',  width:'100%'}}>
                {event.date.split("-").join("/")}
            </DetailText>
        </Row>
    )
}