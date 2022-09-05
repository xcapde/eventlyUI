import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { eventService } from "../services/API/eventService";

export const Detail=()=>{
    const [eventInfo, setEventInfo] = useState({});
    const [id] = useParams().id;

    useEffect(()=>{
        if(!id) return;
        getEventInfo(id);

    },[id]);

    const getEventInfo=(id)=>{
        eventService.getEvent(id).then(res => {
            if(!res) return;
            setEventInfo(res);
            console.log(res)

        })
    }

    return(
        <h1>Sóc el detall de l'event {eventInfo.id}</h1>
    )
}