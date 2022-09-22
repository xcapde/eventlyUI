import { ByDateFeed } from "../components/feeds/ByDateFeedDesktop";
import { NavigationDesktopFeed } from "../components/feeds/NavigationDesktopFeed";
import { MainDesktop } from "../pages/profile/profile.styled";
import { NotificationFeed } from "../components/feeds/NotificationFeed";
import { Col } from "../styles/styles.styled";

export const VProfileDesktop = ({ joined, published, byDate, notifications, toggleCheck, deleteNotification, date, navigationCallback, field }) => {
    return (
        <MainDesktop>
            <NavigationDesktopFeed joined={joined} published={published} callback={navigationCallback} field={field} />
            <ByDateFeed events={byDate} date={date} />
            <Col>user</Col>
            <NotificationFeed notifications={notifications} toggleCheck={toggleCheck} deleteNotification={deleteNotification} />
        </MainDesktop>
    )
}