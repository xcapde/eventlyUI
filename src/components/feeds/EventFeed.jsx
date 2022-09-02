import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { Page } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { VerticalFeed } from "./feed.styled";

export const EventFeed = () => {
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        getAllData();
    },[])

    const getAllData=()=>{
        eventService.getAllEvents().then(res => {
            if(!res) return
            setEvents(res)
        })
    }

    return (
        <Page>  

            <VerticalFeed>
                {events.map((event,key) =>
                <MainCard key={key} event={event}/>
                ).reverse()}
            </VerticalFeed>            

        </Page>
    )
}