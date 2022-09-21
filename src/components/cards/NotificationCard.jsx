import { useEffect } from "react"
import { useState } from "react"
import { DetailText } from "../../styles/styles.styled"
import format from "../../utils/format"
import { NotiCard, NotiStatus, CreatedAt } from "./cards.styled"

export const NotificationCard = ({ notification, toggleCheck, deleteNotification }) => {

    const deletedLeft = '50rem';
    const [start, setStart] = useState();
    const [deleted, setDeleted] = useState();

    const setAction = (end) => {
        if (end - start <= 50 && end - start >= -50) return;
        if (end - start <= -130 && notification.checked) toggleCheck(notification.id);
        if (end - start >= 51 && end - start <= 250 && !notification.checked) toggleCheck(notification.id);
        if (end - start >= 300) runDelete(notification.id);
    }

    const runDelete = (id) => {
        setDeleted(id);
        deleteNotification(id);
        setTimeout(() => {
            setDeleted();
        }, 1500);

    }

    return (
        <NotiCard
            onTouchStart={(e) => setStart(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => setAction(e.changedTouches[0].clientX)}
            col={notification.checked ? '3/13' : '2/13'}
            left={!deleted ? 0 : deleted === notification.id ? deletedLeft : deleted !== notification.id ? 'inherit' : 0}
        >
            <DetailText>{notification.subject}</DetailText>
            <DetailText>
                {notification.description.includes("http://") ?
                    <>
                        {format.cutNotification(notification.description).includes("https://") ?
                            <>{format.cutNotification(notification.description).split("location:")[0]}
                            <a href={format.cutNotification(notification.description).split("location:")[1].substring(0,format.cutNotification(notification.description).split("location:")[1].indexOf(". Check") )}> location</a>
                            {". Check it out at "}
                            </>
                            : format.cutNotification(notification.description)}
                        <a href={format.cutNotificationLink(notification.description)}>{"event detail page !"}</a>
                    </>
                    : notification.description}
            </DetailText>
            <CreatedAt>{format.timeStampToDateAndHour(notification.createdAt)}</CreatedAt>
            <NotiStatus color={notification.checked ? 'var(--color-main)' : 'indianred'} />
        </NotiCard>
    )
}