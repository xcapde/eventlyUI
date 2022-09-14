import { Page, Wrapper } from "../../styles/styles.styled"
import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { AuthService } from "../../services/AuthService"
import { Col, DetailText, Title, View } from "../../styles/styles.styled"
import { Footer } from "../footer/Footer"
import { CalendarCnt, HeaderCnt, InformationCnt } from "./profile.styled"

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
        // <Page> 
        //     <Wrapper>
        //         <HeaderCnt>
        //             <Col>
        //                 to desktop smaller 5% aprox fusion with calendar
        //                 USER NAME
        //                 EVENTS COUNTER
        //             </Col>
        //             PROFILE OPTIONS
        //         </HeaderCnt>                         
        //         <CalendarCnt> 
        //             to desktop BIG 25% aprox
        //             CALENDAR DATE TODAY
        //             CALENDAR VIEW WITH TODAT MARKED
        //         </CalendarCnt>
        //         <InformationCnt> 
        //             to desktop 2 columns: 1 w/ list of events + 1 w/ event detail or defaul ilustration
        //             COMPACT VIEW OF NEXT EVENTS AND EXPANDING CARD
        //                 - HORIZONTAL COLORFULL CARD W/ TITLE HOUR PARTICIPANTS...
        //             EXPANDING VIEW
        //                 - TITLE
        //                 - DATE Big DAY and small column MonthYear AND HOUR
        //                 - DESCRIPTION
        //                 - LOCATION
        //                 - PARTICIPANTS
        //         </InformationCnt>
        //     </Wrapper>            
        //     <Footer/>
        // </Page>
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