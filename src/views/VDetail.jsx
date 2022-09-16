import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, JoinButton } from "../components/buttons";
import { OptionsModule } from "../components/buttons/burgers/OptionsModule";
import { ModuleContent } from "../components/information/ModuleContent"
import { ModuleDetails } from "../components/information/ModuleDetails";
import { Gradient, Img } from "../styles/styles.styled";
import { DetailView, Main, ImgCnt, InfoCnt, DetailTitle, SideControl } from "./detail.styled";
import { eventService } from "../services/API/eventService";
import { Slider } from "../components/slider/Slider";

export const VDetail = ({ event, participations, join, unjoin }) => {
    const navigate = useNavigate();
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags", "map"];
    const [centralIndex, setCentralIndex] = useState(0);
    const id = useParams().id

    useEffect(() => {
        if (!key) return;
    }, [key, event])

    const deleteEvent = () => {
        eventService.deleteEvent(id).then(res => {
            alert(`${res.title} deleted!`)
            navigate('/home')
        });
    }

    const updateEvent = () => {
        navigate(`/update/${event.id}`);
    }

    return (
        <DetailView>
            <SideControl>
                <ImgCnt>
                    <Img imgUrl={event.images.length > 0 ? event.images[centralIndex - 1] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
                </ImgCnt>
            </SideControl>

            <Main>
                <Gradient />
                <BackButton callback={() => navigate(-1)} />
                <OptionsModule event={event} remove={deleteEvent} edit={updateEvent} />

                <ImgCnt>
                    <Slider images={event.images} coordinateSliders={setCentralIndex} />
                </ImgCnt>

                <InfoCnt id="info">
                    <DetailTitle>{event.title}</DetailTitle>
                    <ModuleDetails event={event} participations={participations} />
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                    <JoinButton content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} color={event.participant ? "var(--button-unjoin)" : ""} />
                </InfoCnt>
            </Main>


            <SideControl>
                <ImgCnt>
                    <Img imgUrl={event.images.length > 0 ? event.images[centralIndex + 1] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
                </ImgCnt>
            </SideControl>
        </DetailView>
    )
}