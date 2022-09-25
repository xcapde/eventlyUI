import { NavCntDt } from "../../pages/profile/profile.styled";
import { Col } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { Navigation } from "../information/Navigation";
import { FeedCnt, ProfileFeedDt } from "./feed.styled";

export const NavigationDesktopFeed = ({ joined, published, callback, field }) => {

    const tabs = ["joined", "published"];

    return (
        <Col>
            <FeedCnt gap="0">
                <NavCntDt>
                    <Navigation tabContent={tabs} callback={callback} field={field && field !== 'by_Date' ? field : 'joined'} />
                </NavCntDt>
                <ProfileFeedDt>
                    {field && field !== 'published' ? joined.map((event, key) => (
                        <MainCard key={key} event={event} />
                    )) :
                        published.map((event, key) => (
                            <MainCard key={key} event={event} />
                        ))}
                </ProfileFeedDt>
            </FeedCnt>
        </Col>
    )
}