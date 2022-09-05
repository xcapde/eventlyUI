import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { View } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { SmallCard } from "../cards/SmallCard";
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
        <View> 
            
            <VerticalFeed>
                
                {events.map((event,key) =>
                <MainCard key={key} event={event}/>
                ).reverse()}

            {/* {events.map((event,key) =>
                <SmallCard key={key} event={event}/>
                ).reverse()} */}
                
            </VerticalFeed>            
            
            
        </View>
    )
}