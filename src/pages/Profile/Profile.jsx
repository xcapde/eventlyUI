import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { AuthService } from "../../services/AuthService"
import { Row, Title, NoNavView } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavCnt, Header, Main } from "./profile.styled"
import { Navigation } from "../../components/information/Navigation"
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule"
import { NavRail } from "../../components/navs";
import { ProfileFeed } from "../../components/feeds/ProfileFeed";
import { Calendar } from "../../components/calendar";
import format from "../../utils/format"

export const Profile = () => {
    const [username, setUsername] = useState([]);
    const [joined, setJoined] = useState([]);
    const [published, setPublished] = useState([]);
    const [byDate, setByDate] = useState();
    const [key, setKey] = useState("by_Date");
    const tabContent = ["by_Date", "joined", "published"];
    const [pickedDay, setPickedDay] = useState();

    useEffect(() => {
        if (!key) return;
        getAuth();
        getJoined();
        getPublished();
    }, [key])

    useEffect(() => {
        if (!pickedDay || !joined) return;
        getByDay();
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

    const views = {
        joined: <ProfileFeed events={joined} title={"joined"} />,
        published: <ProfileFeed events={published} title={"published"} />,
        by_Date: <ProfileFeed events={byDate} title={"joined"} date={pickedDay ? pickedDay.date : 'this day'} />
    }

    return (
        <NoNavView>
            <NavRail />
            <Header>
                <Row>
                    <Title>Hi {username}!</Title>
                    <OptionsModule callback={logOut} />
                </Row>
                <Row>
                    <Calendar pickDay={pickDay} pickedDay={pickedDay} />
                </Row>
                <NavCnt>
                    <Navigation tabContent={tabContent} callback={setKey} field={key} />
                </NavCnt>
            </Header>

            <Main>
                {byDate &&
                    views[key]
                }

            </Main>
            <Footer />
        </NoNavView>
    )
}