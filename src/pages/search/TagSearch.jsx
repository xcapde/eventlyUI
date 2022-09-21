import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButtonRelative } from "../../components/buttons";
import { FeedTitle } from "../../components/feeds/feed.styled";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { Wrapper } from "./search.styled";

export const TagSearch = () => {
    const [eventsByTag, setEventsByTag] = useState();    
    const tag = useParams().tag;
    const navigate = useNavigate();

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
                    <Row height='15%' width='95%'>
                        <Col width='4rem' alignItems='flex-start'>
                            <BackButtonRelative callback={()=>navigate(-1)}/>
                        </Col>
                        <Col>
                            <FeedTitle>Events with tag {tag}</FeedTitle>
                        </Col>
                    </Row>
                    
                    <Col height='85%'>
                        {eventsByTag && eventsByTag.length > 0 ?
                        <ModuleVerticalMultiCard tag={tag} events={eventsByTag} title={eventsByTag.length === 1?`${eventsByTag.length} event`: eventsByTag.length > 1? `${eventsByTag.length} events` : ''}/>
                        :
                        <DetailText>There are no events with this tag.</DetailText>
                        }
                    </Col>
                </Wrapper>
                <Footer/>
            </View>    
            )
}