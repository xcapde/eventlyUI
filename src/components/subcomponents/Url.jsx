import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"
import format from "../../utils/format"

export const Url = ({ event }) => {
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-link"></i>
            </DetailIcon>
            <DetailText style={{ width: '100%' }}>
                <a href={event.location}>{format.cutUrl(event.location)}</a>
            </DetailText>
        </Row>
    )
}