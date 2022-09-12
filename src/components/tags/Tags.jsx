import { HorizontalFeed } from "../feeds/feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";

export const Tags = ({tags}) => {

    useEffect(() => {
    }, [tags]);
    
    return(
        <HorizontalFeed>
            {tags && tags.map((tag, key) =>
            <Badge key={key} content={tag.name} tag={tag}/>
            )}                    
        </HorizontalFeed>
    )
}