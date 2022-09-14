import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { AuthService } from "../../services/AuthService"
import { Col, DetailText, Title, View } from "../../styles/styles.styled"
import { Footer } from "../footer/Footer"
import { ProfileGrid } from "./profile.styled"

export const Profile = () => {

    useEffect(() => {
        getAuth();
        getJoined();
        getPublished();
    }, [])

    const [username, setUsername] = useState();
    const [joined, setJoined] = useState();
    const [published, setPublished] = useState();


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

    return (
        <View style={{ height: '90vh', top: 0, width: '85%', left: 'calc((100% - 85%) / 2)' }}>
            {/* <ProfileGrid> */}
            <Col style={{ height: '20vh', gap: '5%' }}>
                <Title>Hi {username}!</Title>
            </Col>
            <Col style={{ height: '40vh', gap: '5%'  }}>
                <Title>Joined Events</Title>
                {joined && joined.length > 0 ?
                    joined.map((event, key) => (<span key={key}>{event.title}</span>)) :
                    <DetailText>You did not join any event yet!</DetailText>}
            </Col>
            <Col style={{ height: '40vh' , gap: '5%' }}>
                <Title>Published Events</Title>
                {published && published.length > 0 ?
                    published.map((event, key) => (<span key={key}>{event.title}</span>)) :
                    <DetailText>What are you waiting to publish your first event?!</DetailText>
                }
            </Col>
            <Footer />
            {/* </ProfileGrid> */}

        </View>
    )
}