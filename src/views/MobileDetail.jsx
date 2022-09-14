import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, JoinButton } from "../components/buttons";
import { OptionsModule } from "../components/buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { ModuleContent } from "../components/information/ModuleContent"
import { ModuleDetails } from "../components/information/ModuleDetails";
import { Col, Gradient, Img, Title, Wrapper, View } from "../styles/styles.styled";
import { PageCntrl, ImgCntrl, SideControl } from "../pages/Detail/detail.styled";
import { eventService } from "../services/API/eventService";

export const MobileDetail = ({ event, participations, join, unjoin }) => {
    const navigate = useNavigate();
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags", "map"];
    const id = useParams().id


    useEffect(() => {
        if (!key) return;

    }, [key, event])

    const deleteEvent = () => {
        eventService.deleteEvent(id).then(res => {
            alert(`${res.title} deleted!`)
            navigate(-1)
        });
        alert(id)
    }

    return (
        <View height='90%' direction='row' style={{top:'0'}}>
            <SideControl>
                <ImgCntrl>
                    <Img imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
                </ImgCntrl>
            </SideControl>
            <PageCntrl id="box">
                <Gradient/>
                <BackButton callback={() => navigate(-1)} />
                <OptionsModule event={event} callback={deleteEvent}/>

                <ImgCntrl>
                    <Img imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
                </ImgCntrl>

                <Col height={'calc(100vh - var(--detail-image-height))'} width='90%' style={{marginBottom:'0.5rem'}}>
                        <Wrapper>
                            <Title style={{padding:'0.75rem'}}>{event.title}</Title>
                            <ModuleDetails event={event} participations={participations}/>
                            <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                        </Wrapper>
                    <JoinButton content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} />
                </Col>
            </PageCntrl>
            <SideControl>
                <ImgCntrl>
                    <Img imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
                </ImgCntrl>
            </SideControl>
        </View>
    )
}