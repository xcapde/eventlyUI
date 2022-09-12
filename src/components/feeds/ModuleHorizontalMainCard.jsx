import { Col, Title } from "../../styles/styles.styled"
import { MainCard } from "../cards/MainCard"
import { HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMainCard = ({events}) => {

    return(
        <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
            <Title>Online</Title>
            <HorizontalFeed height='var(--moduleHorizontal-MainCard-height)' style={{gap:'2rem'}}>
                {events && events.filter(event => event.type.includes('online')).map((event, key) =>
                    <MainCard key={key} event={event} />
                ).reverse()}                        
            </HorizontalFeed>
        </Col>
    )
}