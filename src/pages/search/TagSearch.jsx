import { useEffect, useState } from "react";
import { BackButton } from "../../components/buttons";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Row, Title, View } from "../../styles/styles.styled";
import { Wrapper } from "./search.styled";

export const TagSearch = ({callback}) => {
    const [tag, setTag] = useState();
    const [eventsByTag, setEventsByTag] = useState();    

    useEffect(()=>{
        if(!tag) return;
        getEventsByTag(tag)
    },[tag]);

    const getEventsByTag = (tag) => {
        eventService.getEventsByTag(tag).then(res => {
            if (!res) return
            setEventsByTag(res)
        })
    }

    return (
            <View height='80%'>
            <NavTop/>
                <Wrapper>
                    <Row height='15%' width="90%">
                        <BackButton/>
                        <Title>Events by tag: {tag}</Title>
                    </Row>
                    
                    <Col height='85%'>
                        {eventsByTag && eventsByTag.length > 0 ?
                        <ModuleVerticalMultiCard tag={tag} events={eventsByTag} title={`${eventsByTag.length} events`}/>
                        :
                        <DetailText>There are no events with this tag.</DetailText>
                        }
                    </Col>
                </Wrapper>
                <Footer/>
            </View>    
            )
}