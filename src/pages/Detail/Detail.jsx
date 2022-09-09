import React, { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/buttons/BackButton";
import { eventService } from "../../services/API/eventService";
import { Col } from "../../styles/styles.styled";
import { DetailFooter, DetailHeader, DetailImg, DetailPage } from "./detail.styled";
import { DetailParticipation } from "../../components/subcomponents";
import { ModuleContent, ModuleDetails } from "../../components/eventInfo/indexj";
import { MenuModule } from "../../components/optionsMenu/MenuModule";

export const Detail=()=>{
    const [eventInfo, setEventInfo] = useState();
    const id = useParams().id;
    const [key, setKey] = useState(); 
    const tabContent = ["description", "requirements", "tags", "map"];
    const navigate = useNavigate();


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
            <BackButton action={()=>navigate(-1)}/>
            <MenuModule/>
            <DetailImg imgUrl={'https://st.depositphotos.com/1854227/3601/i/950/depositphotos_36019979-stock-photo-dog-walk.jpg'}/>
            
            <Col height={'calc(100% - var(--detail-image-height))'} width={'var(--page-width)'}>
                <DetailHeader>                  
                    <ModuleDetails event={eventInfo}/>
                </DetailHeader>                         
                <ModuleContent action={setKey} tabContent={tabContent} field={key} event={eventInfo}/>
                <DetailFooter>
                    <DetailParticipation participation={eventInfo.participantsCount}/>                 
                </DetailFooter>                 
            </Col>            
        </DetailPage>
    )
}