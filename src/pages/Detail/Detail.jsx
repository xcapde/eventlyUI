import React, { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { BackButton } from "../../components/buttons/BackButton";
import { MainButton, PageTab } from "../../components/buttons/buttons.styled";
import { EventDate, EventLocation, EventPublisher, EventTime, EventTitle, Participation } from "../../components/subcomponents";
import { eventService } from "../../services/API/eventService";
import { Box, Col } from "../../styles/styles.styled";
import { Badge } from "../../components/badges/Badge";
import { DetailFooter, DetailHeader, DetailImg, DetailPage, NavTabs } from "./detail.styled";

export const Detail=()=>{
    const [eventInfo, setEventInfo] = useState();
    const id = useParams().id;
    const [key, setKey] = useState(); 
    const tabContent = ["description", "requirements", "tags", "map"];

    useEffect(()=>{
        if(!id) return;
        getEventInfo(id);
    },[id]);

    useEffect(()=>{
        if(!key) return;
        console.log(eventInfo[key])
    },[key, eventInfo])

    const getEventInfo=(id)=>{
        eventService.getEvent(id).then(res => {
            if(!res) return;
            setEventInfo(res);
            setKey("description");
        })
    }
    if(eventInfo)
    return(
        <DetailPage>
            <Link to={"/"}>
                <BackButton/>
            </Link>
            <DetailImg imgUrl={'https://st.depositphotos.com/1854227/3601/i/950/depositphotos_36019979-stock-photo-dog-walk.jpg'}/>

            <Box height={'50%'}>
                <DetailHeader>
                    <EventTitle title={eventInfo.title}/>
                    <Box flexDirection={'row'} justifyContent={'flex-start'}>
                        <Box alignItems={'flex-start'}>
                            <EventLocation/>   
                            <EventDate date={eventInfo.date}/>
                            <EventTime hour={eventInfo.hour}/>                        
                        </Box>
                        <Col width={'50%'}>
                            {eventInfo && eventInfo.publisher? 
                            <EventPublisher publisher={eventInfo.publisher}/>:''}             
                        </Col>
                    </Box>
                </DetailHeader>
                
                <NavTabs>
                    {tabContent.map((c, key)=> (<PageTab onClick={()=>setKey(c)}>{c}</PageTab>))}
                </NavTabs>
                <Box height='40%' width={'95%'} justifyContent={'flex-start'}>
                    {key && (key !== "description" && key !== "map")? 
                        eventInfo[key].map(item => <Badge content={item}/> )
                    : key === "description"? <h1>{eventInfo[key]}</h1> : '' 
                    }
                </Box>              

                <DetailFooter>
                    <Participation participation={eventInfo.participantsCount}/>
                    <MainButton>JOIN</MainButton>                 
                </DetailFooter>                 
            </Box>            
        </DetailPage>
    )
}