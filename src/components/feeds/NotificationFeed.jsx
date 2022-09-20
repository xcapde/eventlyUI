import { Col, DetailText } from "../../styles/styles.styled"
import { NotificationCard } from "../cards/NotificationCard"
import { FeedCnt, NotiFeedTitle, NotiFeed } from "./feed.styled"

export const NotificationFeed = ({ notifications }) => {
    return (
        <FeedCnt height="95%" margin="auto 0">
            <NotiFeedTitle>Your notifications</NotiFeedTitle>
            {notifications && notifications.length > 0 ?
                <NotiFeed>
                    {notifications.map((noti, key) => (
                        <NotificationCard notification={noti} col={(key + 1) % 2 === 0 ? '3/13':'2/13'} />
                    ))}
                </NotiFeed> :
                <Col>
                    <DetailText>No notifications for you!</DetailText>
                </Col>
            }
        </FeedCnt>
    )
}