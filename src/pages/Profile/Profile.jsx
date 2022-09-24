import { useEffect, useState } from "react";
import { eventService } from "../../services/API/eventService";
import { AuthService } from "../../services/AuthService";
import { Row, Title, NoNavView, Page } from "../../styles/styles.styled";
import { Footer } from "../../components/footer/Footer";
import { Header } from "./profile.styled";
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule";
import { NavRail } from "../../components/navs";
import { Calendar } from "../../components/calendar";
import format from "../../utils/format";
import { VProfileDesktop } from "../../views/VProfileDesktop";
import { notificationService } from "../../services/API/notificationService";
import { VProfileMobile } from "../../views/VProfileMobile";

export const Profile = () => {
    const [username, setUsername] = useState([]);
    const [joined, setJoined] = useState([]);
    const [published, setPublished] = useState([]);
    const [byDate, setByDate] = useState();
    const [notifications, setNotifications] = useState([]);
    const [key, setKey] = useState("by_Date");
    const [pickedDay, setPickedDay] = useState();

    useEffect(() => {
        if (!key) return;
        getAuth();
        getJoined();
        getPublished();
        getNotifications();
    }, [key])

    useEffect(() => {
        if (!pickedDay || !joined) return;
        getByDay();
        // eslint-disable-next-line
    }, [pickedDay, joined])


    const getAuth = () => {
        if (!AuthService.getAuthUser().username) return;
        setUsername(AuthService.getAuthUser().username);
    }


    const getJoined = () => {
        eventService.getJoinedEvents().then(res => {
            if (!res) return;
            setJoined(res);
        })
    }

    const getPublished = () => {
        eventService.getPublishedEvents().then(res => {
            if (!res) return;
            setPublished(res);
        })
    }

    const logOut = () => {
        let confirmation = window.confirm(`Close your session?`)
        AuthService.logOut(confirmation);
    }


    const pickDay = (day) => {
        setPickedDay(day)
    }

    const getByDay = () => {
        setByDate(joined.filter(e => format.eventDateToCalendarDate(e.date) === pickedDay.date));
    }

    const getNotifications = () => {
        notificationService.getAuthNotifications().then(res => {
            if (!res) return;
            setNotifications(res);
        })
    }

    const toggleCheck = (id) => {
        notificationService.toggleCheck(id).then(res => {
            if (!res) return;
            console.log(res);
            getNotifications();
        })
    }

    const deleteNotification = (id) => {
        notificationService.delete(id).then(res => {
            if (!res) return;
            console.log(res);
            getNotifications();
        })
    }

    return (
        <Page>
            <NavRail />
            <NoNavView>
                <Header>
                    <Row>
                        <Title>Hi {username}!</Title>
                        <OptionsModule callback={logOut} />
                    </Row>
                    <Row>
                        <Calendar pickDay={pickDay} pickedDay={pickedDay} />
                    </Row>

                </Header>

                <VProfileMobile
                    joined={joined}
                    published={published}
                    byDate={byDate}
                    date={pickedDay ? pickedDay.date : 'this day'}
                    callback={setKey}
                    field={key}
                />

                <VProfileDesktop
                    joined={joined}
                    published={published}
                    byDate={byDate}
                    notifications={notifications}
                    date={pickedDay ? pickedDay.date : 'this day'}
                    navigationCallback={setKey}
                    field={key}
                    toggleCheck={toggleCheck}
                    deleteNotification={deleteNotification}
                />
            </NoNavView>
            <Footer />
        </Page>
    )
}