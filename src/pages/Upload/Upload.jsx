import { eventService } from "../../services/API/eventService";
import { View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { directionService } from "../../services/API/directionService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Upload = () => {

    const [event, setEvent] = useState();
    const [direction, setDirection] = useState();
    const { eventId } = useParams();

    useEffect(() => {
        if (!eventId) return;
        getEvent(eventId);
        getDirection(eventId);
    }, [eventId])

    const getEvent = (id) => {
        eventService.getEvent(id).then(res => {
            setEvent(res);
        })
    }

    const postEvent = (data) => {
        eventService.postEvent(data).then(res => {
            if (!res) return; //modal;
            //modal
            setEvent(res);
        })
    }

    const updateEvent = (data) => {
        eventService.updateEvent({ ...data, id: event.id }).then(res => {
            if (!res) return;
            //modal
            if (event.type !== res.type) {
                setDirection("");
            }
            setEvent(res);
        })
    }

    const addDirection = (data) => {
        directionService.createDirection({ ...data, id: event.id }).then(res => {
            if (!res) return;
            //modal res.message
            alert(res.message);
            getEvent(event.id);
            getDirection(event.id);
        })
    }

    const getDirection = (id) => {
        directionService.getByEventId(id).then(res => {
            delete res.id;
            setDirection(res);
        })
    }

    const addWebUrl = (data) => {
        console.log(data);
    }

    console.log("event: ", event)
    console.log(eventId);
    return (
        <View>
            <NavRail />
            <MultiStepForm
                event={event}
                postEvent={postEvent}
                updateEvent={updateEvent}
                addDirection={addDirection}
                eventDirection={direction}
                addWebUrl={addWebUrl}
            />
            <Footer />
        </View>
    )
}