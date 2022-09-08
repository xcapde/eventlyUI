import { Col } from "../../styles/styles.styled"
import { EventDate, EventLocation, EventTime, EventUrl } from "../subcomponents"

export const EventDetails = ({event}) => {
    return(
        <Col alignItems={'space-between'}>
             <Col flexDirection='row' justifyContent='flex-start' height={'unset'} gap={'2rem'} padding={'0 0 0.5rem 0'}> 
                <EventDate date={event.date}/>
                <EventTime hour={event.hour}/>
            </Col>  
            {event.type === "online"? 
            <EventUrl/> : <EventLocation/>}                        
        </Col>
    )
}