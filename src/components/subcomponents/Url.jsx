import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Url = ({event}) => {
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-link"></i>  
            </DetailIcon>
            <DetailText>
                <a href={event.url}>{event.url}</a>
            </DetailText>
        </Row>
    )
}