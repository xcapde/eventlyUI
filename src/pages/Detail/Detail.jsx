import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams, Outlet } from "react-router-dom";
import { BackButton } from "../../components/buttons/BackButton";
import { PageTab } from "../../components/buttons/buttons.styled";
import { EventDate, EventLocation, EventTime, EventTitle } from "../../components/subcomponents";
import { eventService } from "../../services/API/eventService";
import { BlurEffect, PageHeader } from "../../styles/styles.styled";
import { BackgroundImg, DetailButton, DetailFooter, DetailImg, DetailPage, ImgControl, NavigationTabs } from "./detail.styled";

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
        })
    }

    return(
        <DetailPage>
            <PageHeader>
                <Link to={"/"}>
                    <BackButton/>
                </Link>
            </PageHeader>
            
            <ImgControl>                
                <BackgroundImg imgUrl={'https://st.depositphotos.com/1854227/3601/i/950/depositphotos_36019979-stock-photo-dog-walk.jpg'}/>
                <BlurEffect/>
                <DetailImg imgUrl={'https://st.depositphotos.com/1854227/3601/i/950/depositphotos_36019979-stock-photo-dog-walk.jpg'}/>
            </ImgControl>

            <EventTitle event={eventInfo}/>
            {/* <AvatarImg imgUrl={eventInfo.publisher.avatar}/> */}

            <EventLocation />
            <EventDate event={eventInfo}/>
            <EventTime/>

            <NavigationTabs>
                <PageTab>Description</PageTab>
                <PageTab>Requirements</PageTab>
                <PageTab>Map</PageTab>
            </NavigationTabs>
            
            <Outlet/>


            <DetailFooter>
                <DetailButton>JOIN</DetailButton>                 
            </DetailFooter>

        </DetailPage>
    )
}