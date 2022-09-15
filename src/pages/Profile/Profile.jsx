import { Row, Wrapper } from "../../styles/styles.styled"
import { useEffect, useState } from "react"
import { eventService } from "../../services/API/eventService"
import { AuthService } from "../../services/AuthService"
import { Col, DetailText, Title, View } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { CalendarCnt, HeaderCnt, InformationCnt } from "./profile.styled"
import { Navigation } from "../../components/information/Navigation"
import { SmallCard } from "../../components/cards/SmallCard"
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule"
import { NavRail } from "../../components/navs"

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

    const logOut=()=>{
        let confirmation = window.confirm(`Close your session?`)
        AuthService.logOut(confirmation);
    }

    return (
        <View style={{ height: '90vh', top: 0 }}>
            <NavRail/>
            <Wrapper gap='0'>
                <HeaderCnt>
                    <Row style={{width:'80%', gap:'5%', padding:'0 10%'}}>
                        <Col>
                            <Title style={{color:'var(--color-white-contrast'}}>Hi {username}!</Title>
                            {/* {joined.length} joined events */}
                        </Col>
                        <OptionsModule callback={logOut}/>
                    </Row>
                </HeaderCnt>                         
                <CalendarCnt style={{ gap: '5%'  }}> 
                    
                <Navigation tabContent={tabContent} callback={setKey} field={key}/>

                </CalendarCnt>
                <InformationCnt style={{ gap: '5%' }}> 

                <Col>
                    {key && key === "joined"?
                        <Col justifyContent='flex-start' style={{ gap: '2.5%'  }}>
                            <Title style={{fontSize:'medium', justifyContent:'center', padding:'1rem'}}>
                                {joined.length} Joined Events
                            </Title>
                            {joined && joined.length > 0 ?
                            joined.map((event, key) => <SmallCard key={key} event={event}/>) 
                            : <DetailText>You did not join any event yet!</DetailText>
                            }
                        </Col>
                        : key === "published" ?
                        <Col justifyContent='flex-start' style={{ gap: '2.5%'  }}>
                            <Title style={{fontSize:'medium', justifyContent:'center', padding:'1rem'}}>
                                {published.length} Published Events
                            </Title>
                            {published && published.length > 0 ?
                            published.map((event, key) => <SmallCard key={key} event={event}/>) 
                            : <DetailText>What are you waiting to publish your first event?!</DetailText>
                            }
                        </Col> 
                         : 'NO FIELD'
                    }
                </Col>                                     
   
                </InformationCnt>
            </Wrapper>            
            <Footer/>
        </View>
    )
}