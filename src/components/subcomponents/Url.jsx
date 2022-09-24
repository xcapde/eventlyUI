import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"
import format from "../../utils/format"

export const Url = ({ event, fontSize}) => {
    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-link"></i>
            </DetailIcon>
            <DetailText width='100%' fontSize={fontSize}>
                <a href={event.location}>{format.cutUrl(event.location)}</a>
            </DetailText>
        </Row>
    )
}