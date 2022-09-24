import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"
import format from "../../utils/format"

export const Date = ({event, fontSize}) => {
    
    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-calendar-day"></i>
            </DetailIcon>
            <DetailText fontFamily='var(--numbers-font)' fontWeight='500' width='100%' fontSize={fontSize}>
                {format.eventDateToCalendarDate(event.date)}
            </DetailText>
        </Row>
    )
}