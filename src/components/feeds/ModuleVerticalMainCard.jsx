import { Col, DetailText } from "../../styles/styles.styled";
import format from "../../utils/format";
import { TitleCard } from "../cards/cards.styled";
import { MainCard } from "../cards/MainCard";
import { VerticalFeedMainCard } from "./feed.styled";

export const ModuleVerticalMainCard = ({ title, events, tag, width, height, justify, participations}) => {


    return (
        <Col>
            <TitleCard>{format.uppercaseFirstLetter(title)}</TitleCard>
            <VerticalFeedMainCard justify={justify}>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MainCard key={key} event={event} width={width} height={height} participations={participations} />
                    ) :
                    <Col>
                        <DetailText>{title.includes("tag") ? "No events found with "+tag : "No events found"}</DetailText>
                    </Col>
                }
            </VerticalFeedMainCard>
        </Col>
    )
}