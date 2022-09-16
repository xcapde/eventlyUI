import { FeedTitle, HorizontalFeed } from "./feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";
import { Col } from "../../styles/styles.styled";

export const ModuleTags = ({ tags, callback }) => {

    useEffect(() => {
    }, [tags]);

    return (
        <Col height='15%'>
            <FeedTitle>Tags</FeedTitle>
            <HorizontalFeed style={{ overflowY: 'hidden' }}>
                {tags && tags.map((tag, key) =>
                    <Badge callback={callback} key={key} content={tag.name} tag={tag} />
                )}
            </HorizontalFeed>
        </Col>
    )
}