import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const TagsFilter = ({events, tag}) => {

    return(
        <VerticalFeed>
            {events && events.filter(event => event.tag.contains(tag)).map((event, key) =>
                <SmallCard key={key} event={event} />
            )}        
        </VerticalFeed>
    )
}