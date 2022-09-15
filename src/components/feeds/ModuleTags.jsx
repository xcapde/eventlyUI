import { HorizontalFeed } from "./feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";
import { Col, Title } from "../../styles/styles.styled";

export const ModuleTags = ({tags, callback}) => {

    useEffect(() => {
    }, [tags]);
    
    return(
        <Col height='15%'>
        <Title>Tags</Title>
        <HorizontalFeed style={{overflowY:'hidden'}}>
                    {tags && tags.map((tag, key) =>
                    <Badge callback={callback} key={key} content={tag.name} tag={tag}/>
                    )}                    
        </HorizontalFeed>
        </Col>
    )
}