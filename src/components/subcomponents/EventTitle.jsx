import { Title } from "../../styles/styles.styled"

export const EventTitle = ({event}) => {
    return (
        <Title> 
            {event.title}
        </Title>
    )
}