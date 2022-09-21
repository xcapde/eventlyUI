import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButtonRelative } from "../../components/buttons";
import { TitleCard } from "../../components/cards/cards.styled";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { Wrapper } from "../search/search.styled";

export const JoinedList = () => {
    const [joinedEvents, setJoinedEvents] = useState();    
    const navigate = useNavigate();

    useEffect(()=>{
        getJoinedEvents()
    },[]);

    const getJoinedEvents = () => {
        eventService.getJoinedEvents().then(res => {
            if (!res) return
            setJoinedEvents(res)
        })
    }

    return (
            <View height='80%'>
            <NavTop/>
                <Wrapper>
                    <Row height='15%' width='95%'>
                        <Col width='4rem' alignItems='flex-start'>
                            <BackButtonRelative callback={()=>navigate(-1)}/>
                        </Col>
                        <Col>
                            <TitleCard>Joined to:</TitleCard>
                        </Col>
                    </Row>
                    
                    <Col height='85%'>
                        {joinedEvents && joinedEvents.length > 0 ?
                        <ModuleVerticalMultiCard events={joinedEvents} title={joinedEvents.length === 1?`You have joined to ${joinedEvents.length} event`: joinedEvents.length > 1? `You have joined to ${joinedEvents.length} events` : ''}/>
                        :
                        <DetailText>You haven't joined to any event yet.</DetailText>
                        }
                    </Col>
                </Wrapper>
                <Footer/>
            </View>    
            )
}