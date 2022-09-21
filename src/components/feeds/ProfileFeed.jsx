import { ProfileFeedTitle } from "../../pages/profile/profile.styled";
import { Col, DetailText } from "../../styles/styles.styled";
import { FeedCnt, ProfFeed } from "./feed.styled";
import { ModuleVerticalMultiCard } from "./ModuleVerticalMultiCard";


export const ProfileFeed = ({ events, title, date }) => {

    return (
        <FeedCnt height="85%" gap="0">
            <ProfileFeedTitle>{events.length} {title} {events.length !== 1 ? 'events' : 'event'} {date && `in ${date}`}</ProfileFeedTitle>
            <ProfFeed>
                {
                    events && events.length > 0 ?
                        <ModuleVerticalMultiCard events={events}/>
                        :
                        <Col>
                            <DetailText>
                                {title.toLowerCase().includes('published') ?
                                    "What are you waiting to publish your first event?!"
                                    : !date ?
                                        "You did not join any event yet!"
                                        :
                                        "You don't have events programmed for this day"
                                }
                            </DetailText>
                        </Col>
                }
            </ProfFeed>
        </FeedCnt>

    )

}