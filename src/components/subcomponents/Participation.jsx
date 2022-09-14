import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Participation = ({event}) => {
    
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-users"></i>
            </DetailIcon>
            <DetailText>
                    {event.participantsCount === 0? 
                        'Be the first!' 
                        : 
                        `${event.participantsCount} joined`
                    }
            </DetailText>            
        </Row>
    )
}