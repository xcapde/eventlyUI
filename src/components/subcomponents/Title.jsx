import { TitleCard } from "../../styles/styles.styled"

export const Title = ({event}) => {
    
    return (
        <TitleCard>
            {event.title}   
        </TitleCard>
    )
}