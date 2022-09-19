import { ProfileFeedTitle } from "../../pages/profile/profile.styled";
import { Col, DetailText } from "../../styles/styles.styled";
import { SmallCard } from "../cards/SmallCard";
import { FeedCnt, ProfFeed } from "./feed.styled";


export const ProfileFeed = ({ events, title, date }) => {

    return (
        <FeedCnt gap="0">
            <ProfileFeedTitle>{events.length} {title} {events.length !== 1 ? 'events' : 'event'} {date && `in ${date}`}</ProfileFeedTitle>
            <ProfFeed>
                {
                    events && events.length > 0 ?
                        events.map((event, key) =>
                            <SmallCard key={key} event={event} />
                        ).reverse()
                        :

                        <DetailText>
                            {title.toLowerCase().includes('published') ?
                                "What are you waiting to publish your first event?!"
                                : !date ?
                                    "You did not join any event yet!"
                                    :
                                    "You don't have events programmed for this day"
                            }
                        </DetailText>
                }
            </ProfFeed>
        </FeedCnt>

    )

}