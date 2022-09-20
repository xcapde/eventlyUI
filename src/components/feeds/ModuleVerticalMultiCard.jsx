import { Col } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { MainCard } from "../cards/MainCard"
import { VerticalFeedDesktop, VerticalFeedMobile } from "./feed.styled"

export const ModuleVerticalMultiCard = ({ events, width, height }) => {


    return (
            <Col height={height}>
                    <VerticalFeedMobile>
                            {events.map((event, key) =>
                                <SmallCard key={key} event={event} />
                            ).reverse()}
                    </VerticalFeedMobile>

                    <VerticalFeedDesktop>                    
                            {events.map((event, key) =>
                                <MainCard key={key} event={event} width={width} />
                            )}                    
                    </VerticalFeedDesktop>
            </Col>
    )
}