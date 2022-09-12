import { HorizontalFeed } from "./feed.styled"
import { Badge } from "../badges/Badge";
import { useEffect } from "react";

export const ModuleTags = ({tags}) => {

    useEffect(() => {
    }, [tags]);
    
    return(
        <HorizontalFeed height='var(--module-tags-height)'>
            {tags && tags.map((tag, key) =>
            <Badge key={key} content={tag.name} tag={tag}/>
            )}                    
        </HorizontalFeed>
    )
}