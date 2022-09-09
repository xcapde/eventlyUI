import { Title } from "../../styles/styles.styled"

export const EventTitle = ({event, margin, fontSize}) => {
    return (
        <Title margin={margin} fontSize={fontSize}> 
            {event.title}
        </Title>
    )
}