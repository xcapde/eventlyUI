import { Col, Title } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMidCard  = ({events}) => {

    return(
        <Col style={{height:'auto', overflowY: "scroll" }}>
            <Title style={{overflow:'none'}}>Online</Title>
            <HorizontalFeed height='var(--moduleHorizontal-MidCard-height)' style={{gap:'1.5rem'}}>
                {events && events.filter(event => event.type.includes('online')).map((event, key) =>
                    <MidCard key={key} event={event} />
                ).reverse()}                        
            </HorizontalFeed>
        </Col>
    )
}