import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { tagService } from "../../services/API/tagService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMidCard } from "./ModuleHorizontalMidCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";

export const HomeFeed = () => {
    const [events, setEvents] = useState([]);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState();
    const [eventsByTag, setEventsByTag] = useState();
    const [onlineEvents, setOnlineEvents] = useState([]);
    const [offlineEvents, setOfflineEvents] = useState([]);
    const [seeAll, setSeeAll] = useState(false);


    useEffect(() => {
        getAllData();
        getAllTags();
        getOnlineEvents();
        getOfflineEvents();
    }, [])

    useEffect(() => {
        if (!tag) return
        getEventsByTag(tag);
    }, [tag])


    useEffect(() => {
        if (!eventsByTag) return;
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
            <Col justifyContent='flex-start' style={{ marginTop: '5%', width: '95%' }}>
                <Row height='unset' style={{ justifyContent: 'flex-end' }}>
                    {tag ?
                        <LinkButton callback={() => { setTag(); setEventsByTag(); setSeeAll(false) }} content={'Clear'} />
                        :
                        !seeAll ?
                            <LinkButton callback={() => { setSeeAll(true); setTag(); setEventsByTag() }} content={'See All'} /> :
                            <LinkButton callback={() => { setSeeAll(false); setTag(); setEventsByTag() }} content={'By type'} />}
                </Row>
                <ModuleTags tags={tags} callback={(data) => {setTag(data); setSeeAll(false)} } />
                {!eventsByTag && !seeAll &&
                    <React.Fragment>
                        <ModuleHorizontalMidCard title={'Offline'} events={offlineEvents} />
                        <ModuleVerticalSmallCard title={'Online'} events={onlineEvents} />
                    </React.Fragment>
                }
                {/* react component */}

                {!seeAll && eventsByTag &&
                    // <TagsFilter/>

                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        {eventsByTag.length > 0 ?
                            <ModuleVerticalMainCard title={'By tag'} events={eventsByTag} />
                            :
                            <DetailText>There are no events with {tag}</DetailText>
                        }
                    </Col>
                }
                {seeAll && !eventsByTag &&
                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        {events.length > 0 ?
                            <ModuleVerticalMainCard title={'All'} events={events} />
                            :
                            <DetailText>There are no events</DetailText>
                        }
                    </Col>
                }
            </Col>
        </View >
    )
}