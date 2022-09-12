import { DetailText } from "../../styles/styles.styled"

export const Participation = ({event}) => {
    
    return (
        <DetailText style={{gap:'10%'}}>
                <i className="fa-solid fa-users"></i>
                {event.participantsCount === 0? 'Be the first!' : `${event.participantsCount} joined`}
        </DetailText>            
    )
}