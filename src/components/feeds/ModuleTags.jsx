import { HorizontalFeed } from "./feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";
import { Col, Title } from "../../styles/styles.styled";

export const ModuleTags = ({tags}) => {

    useEffect(() => {
    }, [tags]);
    
    return(
        <Col height='15%'>
        <Title style={{padding:'0.75rem'}}>Tags</Title>
        <HorizontalFeed style={{overflowY:'hidden'}}>
                    {tags && tags.map((tag, key) =>
                    <Badge key={key} content={tag.name} tag={tag}/>
                    )}                    
        </HorizontalFeed>
        </Col>
    )
}