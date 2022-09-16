import { Col, DetailText } from "../../styles/styles.styled";
import { MidCard } from "../cards/MidCard";
import { FeedTitle, VerticalFeed } from "./feed.styled";

export const ModuleVerticalMainCard = ({ title, events, tag, width, justify }) => {


    return (
        <Col>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed justify={justify}>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MidCard key={key} event={event} width={width} />
                    ) :
                    <Col>
                        <DetailText>{title.includes("tag") ? "No events found with "+tag : "No events found"}</DetailText>
                    </Col>
                }
            </VerticalFeed>
        </Col>
    )
}