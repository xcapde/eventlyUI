import { View } from "../../styles/styles.styled"
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

    console.log(notifications);
    return (
        <View style={{ justifyContent: 'center' }}>
            <NavTop />
            <NotificationFeed notifications={notifications} />
            <Footer />
        </View>
    )
}