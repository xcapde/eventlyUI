import { DetailText } from "../../styles/styles.styled"
import format from "../../utils/format"
import { NotiCard, NotiStatus, CreatedAt } from "./cards.styled"

export const NotificationCard = ({ notification, col }) => {
    return (
        <NotiCard col={col}>
            <DetailText>{notification.subject}</DetailText>
            <DetailText>
                {notification.description.includes("http://") ?
                    <>
                        {format.cutNotification(notification.description)}
                        <a href={format.cutNotificationLink(notification.description)}>event detail page !</a>
                    </>
                    : notification.description}
            </DetailText>
            <CreatedAt>{format.timeStampToDateAndHour(notification.createdAt)}</CreatedAt>
            <NotiStatus color={notification.checked ? 'var(--color-main)' : 'indianred'} />
        </NotiCard>
    )
}