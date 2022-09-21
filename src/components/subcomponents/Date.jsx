import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"
import format from "../../utils/format"

export const Date = ({event}) => {
    
    return (
        <Row style={{width: 'fit-content'}}>
            <DetailIcon>
                <i className="fa-solid fa-calendar-day"></i>
            </DetailIcon>
            <DetailText style={{fontFamily:'var(--numbers-font)', fontWeight:'500',  width:'100%'}}>
                {format.eventDateToCalendarDate(event.date)}
            </DetailText>
        </Row>
    )
}