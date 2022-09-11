import { eventService } from "../../services/API/eventService";
import { View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { directionService } from "../../services/API/directionService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { imageService } from "../../services/API/imageService";
import { requirementService } from "../../services/API/requirementService";

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

    const uploadImg = (data) => {
        console.log(data)
        imageService.postImg(data, event.id).then(res => {
            console.log(res.message);
            getEvent(event.id);
        })
    }

    const deleteImg = (data) => {
        imageService.deleteByUrl(data).then(res => {
            console.log(res.message);
            getEvent(event.id);
        })
    }

    const addReq = (data) => {
        requirementService.createRequirement({ name: data.requirement, id: event.id }).then(res => {
            if (!res) return;
            alert(res.message);
            getEvent(event.id);
        })
    }

    const deleteReq = (data) => {
        requirementService.deleteRequirement({ name: data, id: event.id }).then(res => {
            if (!res) return;
            alert(res.message);
            getEvent(event.id);
        })
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
                uploadImg={uploadImg}
                deleteImg={deleteImg}
                addReq={addReq}
                deleteReq={deleteReq}
            />
            <Footer />
        </View>
    )
}