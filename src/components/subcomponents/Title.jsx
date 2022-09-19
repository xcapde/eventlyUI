import { TitleCard } from "../cards/cards.styled"

export const Title = ({event}) => {
    
    return (
        <TitleCard>
            {event.title}   
        </TitleCard>
    )
}