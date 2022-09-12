import { SecondaryText } from "../../styles/styles.styled"

export const Participation = ({event}) => {
    
    return (
        <SecondaryText style={{gap:'10%', width:'50%'}}>
                <i className="fa-solid fa-users"></i>
                {event.participantsCount === 0? 'Be the first!' : `${event.participantsCount} joined`}
        </SecondaryText>            
    )
}