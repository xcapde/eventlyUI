import React, { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { BackButton } from "../../components/buttons/BackButton";
import { PageTab } from "../../components/buttons/buttons.styled";
import { EventDate, EventLocation, EventTime, EventTitle, Participation } from "../../components/subcomponents";
import { eventService } from "../../services/API/eventService";
import { AvatarImg, BlurEffect, PageHeader } from "../../styles/styles.styled";
import { Badge } from "../../components/badges/Badge";
import { DetailBox, DetailButton, DetailFooter, DetailHeader, DetailImg, DetailPage, ImgControl, NavigationTabs, TabsContain } from "./detail.styled";

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
            <PageHeader>
                <Link to={"/"}>
                    <BackButton/>
                </Link>
            </PageHeader> 

            <ImgControl>                
                <BlurEffect/>
                <DetailImg imgUrl={'https://st.depositphotos.com/1854227/3601/i/950/depositphotos_36019979-stock-photo-dog-walk.jpg'}/>
            </ImgControl>

            <DetailBox>
                <DetailHeader>
                    <EventTitle title={eventInfo.title}/>
                    <EventLocation/>                
                </DetailHeader>

                {eventInfo && eventInfo.publisher? <AvatarImg imgUrl={eventInfo.publisher.avatar}/>:''}
                <EventDate date={eventInfo.date}/>
                <EventTime hour={eventInfo.hour}/>

                <NavigationTabs>
                    {tabContent.map((c, key)=> (<PageTab onClick={()=>setKey(c)}>{c}</PageTab>))}
                </NavigationTabs>

                <TabsContain>
                    {key && (key !== "description" && key !== "map")? 
                        eventInfo[key].map(item => <Badge content={item}/> )
                    : key === "description"? <h1>{eventInfo[key]}</h1> : '' 
                    }
                </TabsContain>              

                <DetailFooter>
                    <Participation participation={eventInfo.participantsCount}/>
                    <DetailButton>JOIN</DetailButton>                 
                </DetailFooter> 
                
            </DetailBox>
            
        </DetailPage>
    )
}