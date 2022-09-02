import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";

export const EventFeed = () => {
    // const [events, setEvents] = useState([]);

    // useEffect(()=>{

    // },[])

    // const getAllEvents=()=>{

    // }

    return (
        <Col style={{width: '100%', height: '100%'}}>
            
            {/* <React.Fragment>{events.map((event,key) =>
                <MainCard key={key} event={event}/>
                ).reverse()}
            </React.Fragment> */}
            <MainCard />

        </Col>
    )
}