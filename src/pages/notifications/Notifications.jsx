import { Page, View } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavTop } from "../../components/navs"
import { useEffect, useState } from "react"
import { notificationService } from "../../services/API/notificationService";
import { NotificationFeed } from "../../components/feeds/NotificationFeed";

export const Notifications = () => {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        getNotifications();
    }, [])

    const getNotifications = () => {
        notificationService.getAuthNotifications().then(res => {
            if (!res) return;
            setNotifications(res);
        })
    }

    const toggleCheck = (id) => {
        notificationService.toggleCheck(id).then(res => {
            if (!res) return;
            getNotifications();
        })
    }

    const deleteNotification = (id) => {
        notificationService.delete(id).then(res => {
            if (!res) return;
            getNotifications();
        })
    }

    return (
        <Page>
            <View>
                <NavTop />
                <NotificationFeed notifications={notifications} toggleCheck={toggleCheck} deleteNotification={deleteNotification} />
                <Footer />
            </View>
        </Page>
    )
}