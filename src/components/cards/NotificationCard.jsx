import { useState } from "react";
import { DetailText } from "../../styles/styles.styled";
import format from "../../utils/format";
import { TrashIcon } from "../buttons/buttons.styled";
import { NotiCard, NotiStatus, CreatedAt } from "./cards.styled";

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
        }, 2500);

    }

    return (
        <NotiCard
            onTouchStart={(e) => setStart(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => setAction(e.changedTouches[0].clientX)}
            col={notification.checked ? '3/16' : '2/16'}
            colCheck={notification.checked ? '2/16' : '2/15'}
            left={!deleted ? 0 : deleted === notification.id ? deletedLeft : deleted !== notification.id ? 'inherit' : 0}
        >
            <DetailText>{notification.subject}</DetailText>
            <DetailText>
                {notification.description.includes("http://")?
                    <>
                        {format.cutNotification(notification.description)}
                        <a href={format.cutNotificationLink(notification.description, "http://", notification.description.length-1)}>{"event detail page !"}</a>
                    </>
                    :
                    notification.description.includes("https://") ? format.cutNotification(notification.description) : notification.description}
            </DetailText>
            <CreatedAt>{format.timeStampToDateAndHour(notification.createdAt)}</CreatedAt>
            <NotiStatus onClick={() => toggleCheck(notification.id)} color={notification.checked ? 'var(--color-main)' : 'indianred'} />
            <TrashIcon onClick={()=>runDelete(notification.id)}/>
        </NotiCard>
    )
}