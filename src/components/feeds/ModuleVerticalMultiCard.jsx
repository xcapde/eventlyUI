import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { MainCard } from "../cards/MainCard"
import { FeedTitle, VerticalFeed, VerticalFeedDesktop, VerticalFeedMobile } from "./feed.styled"

export const ModuleVerticalMultiCard = ({ title, events, tag, width, height }) => {


    return (
            <Col height={height}>
                <FeedTitle>{title}</FeedTitle>
            
                {events && events.length > 0 ?
                <>
                    <VerticalFeedMobile>
                        <Col height='unset'>
                            
                            <VerticalFeed>
                                    {events.map((event, key) =>
                                        <SmallCard key={key} event={event} />
                                    ).reverse()}
                            </VerticalFeed>                      
                            
                        </Col>
                    </VerticalFeedMobile>

                    <VerticalFeedDesktop>                    
                            {events.map((event, key) =>
                                <MainCard key={key} event={event} width={width} />
                            )}                    
                    </VerticalFeedDesktop>
                </>
                :
                <Col>
                    <DetailText>There are no events.</DetailText>
                </Col>
                }
            </Col>
    )
}