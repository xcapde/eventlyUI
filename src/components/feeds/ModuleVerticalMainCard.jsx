import { Col, DetailText } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { FeedTitle, VerticalFeedMainCard } from "./feed.styled";

export const ModuleVerticalMainCard = ({ title, events, tag, width, justify, participations}) => {


    return (
        <Col>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeedMainCard justify={justify}>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MainCard key={key} event={event} width={width} participations={participations} />
                    ) :
                    <Col>
                        <DetailText>{title.includes("tag") ? "No events found with "+tag : "No events found"}</DetailText>
                    </Col>
                }
            </VerticalFeedMainCard>
        </Col>
    )
}