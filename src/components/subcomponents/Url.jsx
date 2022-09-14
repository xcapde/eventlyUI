import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Url = ({event}) => {
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-link"></i>  
            </DetailIcon>
            <DetailText style={{width:'100%'}}>
                <a href={event.url}>{event.url}</a>
            </DetailText>
        </Row>
    )
}