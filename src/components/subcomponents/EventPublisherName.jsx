import { DetailText } from "../../styles/styles.styled"

export const EventPublisherName = ({event}) => {
    return (
            <DetailText>
                {event.publisher.username}
            </DetailText> 
    )
}