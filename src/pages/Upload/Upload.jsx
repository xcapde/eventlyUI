import { eventService } from "../../services/API/eventService";
import { View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { directionService } from "../../services/API/directionService";

export const Upload = () => {

    const [event, setEvent] = useState();
    const [direction, setDirection] = useState();

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
            setEvent(res)
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
    return (
        <View style={{ height: '90vh', width: '100vw', textAlign: "center" }}>
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