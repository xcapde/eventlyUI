import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { AuthService } from "../../services/AuthService"
import { Col, Row, DetailText, Title, NoNavView } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavCnt, Header, Main } from "./profile.styled"
import { Navigation } from "../../components/information/Navigation"
import { SmallCard } from "../../components/cards/SmallCard"
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule"
import { NavRail } from "../../components/navs";
import { FeedCnt } from "../../components/feeds/feed.styled";
import { ProfileFeed } from "../../components/feeds/ProfileFeed"

export const Profile = () => {
    const [username, setUsername] = useState([]);
    const [joined, setJoined] = useState([]);
    const [published, setPublished] = useState([]);
    const [key, setKey] = useState("joined");
    const tabContent = ["joined", "published"];

    useEffect(() => {
        if (!key) return;
        getAuth();
        getJoined();
        getPublished();
    }, [key])


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

    return (
        <NoNavView>
            <NavRail />
            <Header>
                <Row>
                    <Title>Hi {username}!</Title>
                    <OptionsModule callback={logOut} />
                </Row>
                <Row>
                    <Title>calendar</Title>
                </Row>
                <NavCnt>
                    <Navigation tabContent={tabContent} callback={setKey} field={key} />
                </NavCnt>
            </Header>

            <Main>
                {key && key === "joined" ?
                    <ProfileFeed events={joined} title={"Joined"} />
                    :
                    <ProfileFeed events={published} title={"Published"} />
                }
            </Main>
            <Footer />
        </NoNavView>
    )
}