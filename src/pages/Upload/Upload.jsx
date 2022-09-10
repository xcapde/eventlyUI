import { EventForm } from "../../components/forms/EventForm";
import { EventTitle } from "../../components/subcomponents";
import { eventService } from "../../services/API/eventService";
import { Col, View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";

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
        eventService.updateEvent({...data, id: event.id}).then(res => {
            if (!res) return;
            //modal
            setEvent(res)
        })
    }

    console.log(event)
    return (
        <View style={{ height: '90vh', width: '100vw', textAlign: "center" }}>
            <NavRail />
            <Col style={{ height: '40vh' }}>
                <EventTitle title={"Upload your event!"} />
            </Col>
            <Col>
                <EventForm postEvent={postEvent} updateEvent={updateEvent} eventToUpdate={event} />
            </Col>
            <Footer />
        </View>
    )
}