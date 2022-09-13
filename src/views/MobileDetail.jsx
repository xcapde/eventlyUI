import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton, JoinButton } from "../components/buttons";
import { OptionsModule } from "../components/buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { ModuleContent } from "../components/information/ModuleContent"
import { ModuleDetails } from "../components/information/ModuleDetails";
import { Col, Gradient, Img, View } from "../styles/styles.styled";

export const MobileDetail = ({ event }) => {
    const navigate = useNavigate();
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags", "map"];

    useEffect(() => {
        if (!key) return;
    }, [key, event])

    return (
        <View style={{height:'90vh', top:0, gap:'1rem'}}>
            <Gradient/>
            <BackButton callback={() => navigate(-1)} />
            <OptionsModule/>
            
            <Img style={{height:'var(--detail-image-height)'}} imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />

            <Col height={'calc(87vh - var(--detail-image-height))'} justifyContent='flex-start' width='90%'>
                <Col justifyContent='space-between'>
                    <ModuleDetails event={event}/>
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                </Col>
                <JoinButton content={'Join'} callback={()=>console.error('not implemented yet')}/>
            </Col>
        </View>
    )
}