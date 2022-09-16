import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Participation = ({event}) => {
    
    return (
        <Row height="fit-content">
            <DetailIcon>
                <i className="fa-solid fa-users"></i>
            </DetailIcon>
            <DetailText style={{width:'100%'}}>
                    {event.participantsCount === 0? 
                        'Be the first!' 
                        : 
                        `${event.participantsCount} joined`
                    }
            </DetailText>            
        </Row>
    )
}