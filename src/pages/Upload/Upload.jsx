import { eventService } from "../../services/API/eventService";
import { View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";

export const Upload = () => {

    const [event, setEvent] = useState();

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

    console.log("event: ",event)
    return (
        <View style={{ height: '90vh', width: '100vw', textAlign: "center" }}>
            <NavRail />
            <MultiStepForm postEvent={postEvent} updateEvent={updateEvent} event={event} />
            <Footer />
        </View>
    )
}