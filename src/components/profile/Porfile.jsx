import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { Col, Title, View } from "../../styles/styles.styled"
import { Footer } from "../footer/Footer"
import { ProfileGrid } from "./profile.styled"

export const Profile = () => {

    useEffect(() => {
        getJoined();
        getPublished();
    }, [])

    const [joined, setJoined] = useState();
    const [published, setPublished] = useState();


    const getJoined = () => {
        eventService.getJoinedEvents().then(res => {
            if (!res) return;
            console.log(res)
            setJoined(res);
        })
    }

    const getPublished = () => {
        eventService.getPublishedEvents().then(res => {
            if (!res) return;
            console.log(res);
            setPublished(res);
        })
    }

    console.log(published);
    return (
        // <View style={{height:'90vh', top:0}}>       

        <ProfileGrid>
            <Col>
                <Title>Joined Events</Title>
                {joined && joined.length > 0 &&
                    joined.map((event, key) => (<span key={key}>{event.title}</span>))}
            </Col>
            <Col>
                <Title>Published Events</Title>
                {published && published.length > 0 &&
                    published.map((event, key) => (<span key={key}>{event.title}</span>))}
            </Col>
            <Footer />
        </ProfileGrid>

        // </View>
    )
}