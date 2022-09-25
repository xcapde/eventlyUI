import { Col, DetailText } from "../../styles/styles.styled";
import { NotificationCard } from "../cards/NotificationCard";
import { ContainerScroller } from "../subcomponents/ContainerScroller";
import { FeedCnt, NotiFeedTitle, NotiFeed } from "./feed.styled";

export const NotificationFeed = ({ notifications, toggleCheck, deleteNotification }) => {

    return (
        <FeedCnt height="95%" margin="auto 0">
            <NotiFeedTitle>Your notifications</NotiFeedTitle>
            {notifications && notifications.length > 0 ?
                <NotiFeed >
                    <ContainerScroller scrollSize={8}/>
                    {notifications.map((noti, key) => (
                        <NotificationCard key={key} notification={noti} toggleCheck={toggleCheck} deleteNotification={deleteNotification} />
                    ))}
                </NotiFeed> :
                <Col>
                    <DetailText>No notifications for you!</DetailText>
                </Col>
            }
        </FeedCnt>
    )
}