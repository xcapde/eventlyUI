import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Participation = ({event, fontSize}) => {
    
    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-user"></i>
            </DetailIcon>
            <DetailText width='100%' fontSize={fontSize}>
                    {event.participantsCount === 0? 
                        'Be the first!' 
                        : 
                        `${event.participantsCount} joined`
                    }
            </DetailText>            
        </Row>
    )
}