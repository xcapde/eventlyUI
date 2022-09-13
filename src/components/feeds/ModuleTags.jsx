import { HorizontalFeed } from "./feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";
import { Col, Title } from "../../styles/styles.styled";

export const ModuleTags = ({tags}) => {

    useEffect(() => {
    }, [tags]);
    
    return(
        <Col height='unset' style={{ gap: '3%'}}>
        <Title>Tags</Title>
        <HorizontalFeed height='var(--module-tags-height)'>
                    {tags && tags.map((tag, key) =>
                    <Badge key={key} content={tag.name} tag={tag}/>
                    )}                    
        </HorizontalFeed>
        </Col>
    )
}