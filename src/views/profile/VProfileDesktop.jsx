import { ByDateFeed } from "../../components/feeds/ByDateFeedDesktop";
import { NavigationDesktopFeed } from "../../components/feeds/NavigationDesktopFeed";
import { MainDesktop } from "../../pages/profile/profile.styled";
import { NotificationFeed } from "../../components/feeds/NotificationFeed";
import { DetailText } from "../../styles/styles.styled";
import { useState } from "react";
import { useEffect } from "react";

export const VProfileDesktop = ({ joined, published, byDate, notifications, toggleCheck, deleteNotification, date, navigationCallback, field }) => {

    const [notiCounter, setNotiCounter] = useState();

    useEffect(() => {
        setNotiCounter(notifications.filter(n => !n.checked).length)
    }, [notifications])

    return (
        <MainDesktop>
            <NavigationDesktopFeed joined={joined} published={published} callback={navigationCallback} field={field} />
            <NotificationFeed notifications={notifications} toggleCheck={toggleCheck} deleteNotification={deleteNotification} />
            <ByDateFeed events={byDate} date={date} />

            <DetailText>Your events</DetailText>
            <DetailText>You have <span style={{color:"indianred"}}>{notiCounter} unchecked {notiCounter !== 1 ? "notifications" : "notification"} </span></DetailText>
            <DetailText>Events in {date}</DetailText>
        </MainDesktop>
    )
}