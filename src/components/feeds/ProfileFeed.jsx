import { ProfileFeedTitle } from "../../pages/Profile/profile.styled";
import { Col, DetailText } from "../../styles/styles.styled";
import { SmallCard } from "../cards/SmallCard";
import { ProfFeed } from "./feed.styled";


export const ProfileFeed = ({ events, title }) => {

    return (
        <ProfFeed>
            <ProfileFeedTitle>{events.length} {title} Events</ProfileFeedTitle>
            {
                events && events.length > 0 ?
                    events.map((event, key) =>
                        <SmallCard key={key} event={event} />
                    ).reverse()
                    :

                    <DetailText>
                        {title.toLowerCase().includes('join') ?
                            "You did not join any event yet!"
                            : "What are you waiting to publish your first event?!"
                        }
                    </DetailText>
            }
        </ProfFeed>
    )

}