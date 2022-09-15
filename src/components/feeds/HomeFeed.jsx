import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { tagService } from "../../services/API/tagService";
import { Col, DetailText, Row, Title, View } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { VerticalFeed } from "./feed.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMidCard } from "./ModuleHorizontalMidCard";
import { SmallCard } from "../cards/SmallCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";

export const HomeFeed = () => {
    const [events, setEvents] = useState([]);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState();
    const [eventsByTag, setEventsByTag] = useState();
    const [onlineEvents, setOnlineEvents] = useState([]);
    const [offlineEvents, setOfflineEvents] = useState([]);


    useEffect(() => {
        getAllData();
        getAllTags();
        getOnlineEvents();
        getOfflineEvents();
    }, [])

    useEffect(() => {
        if(!tag) return
        getEventsByTag(tag);
    }, [tag])

    
    useEffect(() => {
    }, [eventsByTag])

    const getAllData = () => {
        eventService.getAllEvents().then(res => {
            if (!res) return
            setEvents(res)
        })
    }

    const getAllTags = () => {
        tagService.getAll().then(res => {
            if (!res) return
            setTags(res)
        })
    }

    const getEventsByTag = (tag) => {
        eventService.getEventsByTag(tag).then(res => {
            if (!res) return
            setEventsByTag(res)
        })
    }

    const getOnlineEvents = () => {
        eventService.getOnlineEvent().then(res => {
            if (!res) return
            setOnlineEvents(res)
        })
    }

    const getOfflineEvents = () => {
        eventService.getOfflineEvent().then(res => {
            if (!res) return
            setOfflineEvents(res)
        })
    }

    return (
        <View>
            <Col justifyContent='flex-start' style={{marginTop:'5%'}}>
                
                <ModuleTags tags={tags} callback={setTag}/>
                {!eventsByTag &&
                    <React.Fragment>  
                        <ModuleHorizontalMidCard title={'Offline'} events={offlineEvents}/>
                        <ModuleVerticalSmallCard title={'Online'} events={onlineEvents}/> 
                    </React.Fragment>
                }
                {/* react component */}

                {eventsByTag &&
                // <TagsFilter/>

                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        <Row height='unset' style={{justifyContent:'flex-end'}}>
                            <LinkButton callback={()=>{setTag();setEventsByTag()}} content={'Clear'}/>
                        </Row>
                        {eventsByTag.length> 0?  
                        <ModuleVerticalMainCard title={'By tag'} events={eventsByTag}/> 
                        :
                        <DetailText>There are no events with {tag}</DetailText>
                    }
                    </Col>
                }
            </Col>
        </View >
    )
}