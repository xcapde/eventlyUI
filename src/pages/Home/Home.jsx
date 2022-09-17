import { useEffect, useState } from "react";
import { HomeFeed } from "../../components/feeds";
import { Footer } from "../../components/footer/Footer";
import { NavRail, NavTop } from "../../components/navs";
import { eventService } from "../../services/API/eventService";
import { participationService } from "../../services/API/participationService";
import { tagService } from "../../services/API/tagService";
import { Page } from "../../styles/styles.styled";

export function Home() {

    const [events, setEvents] = useState([]);
    const [participations, setParticipations] = useState();
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState();
    const [eventsByTag, setEventsByTag] = useState();
    const [onlineEvents, setOnlineEvents] = useState([]);
    const [offlineEvents, setOfflineEvents] = useState([]);
    const [seeAll, setSeeAll] = useState(false);


    useEffect(() => {
        getParts();
        getAllTags();
        getOnlineEvents();
        getOfflineEvents();
    }, [])

    useEffect(()=>{
        getAllEvents()
        // eslint-disable-next-line
    },[participations])

    useEffect(() => {
        if (!tag) return
        getEventsByTag(tag);
    }, [tag])


    useEffect(() => {
        if (!eventsByTag) return;
    }, [eventsByTag])

    const getAllEvents = () => {
        eventService.getAllEvents().then(res => {
            if (!res) return;
            if (!participations) return;
            let eventsWithParts = res.map((event, key) => {
                let eventPart = participations.filter((part, key) => part.event.id === event.id);
                return { ...event, participations: eventPart }
            })
            setEvents(eventsWithParts);

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

    const getParts = () => {
        participationService.getAll().then(res => {
            if (!res) return;
            setParticipations(res);
        })
    }

    return (
        <Page>
            <NavTop />
            <NavRail />
            <HomeFeed
                events={events}
                tags={tags}
                tag={tag}
                setTag={setTag}
                eventsByTag={eventsByTag}
                setEventsByTag={setEventsByTag}
                onlineEvents={onlineEvents}
                offlineEvents={offlineEvents}
                seeAll={seeAll}
                setSeeAll={setSeeAll}
            />
            <Footer />
        </Page>
    )
}