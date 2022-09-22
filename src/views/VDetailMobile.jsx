import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton, JoinButton } from "../components/buttons";
import { OptionsModule } from "../components/buttons/burgers/OptionsModule";
import { ModuleContent } from "../components/information/ModuleContent"
import { ModuleDetails } from "../components/information/ModuleDetails";
import { NoNavView, Col } from "../styles/styles.styled";
import { ImgCnt, InfoCnt, DetailTitle } from "./detail.styled";
import { Slider } from "../components/slider/Slider";


export const VDetailMobile = ({ event, participations, join, unjoin, deletConfirmation, updateEvent }) => {
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags"];
    const navigate = useNavigate();

    return (
        <NoNavView id="no-nav" displayD="none">
            <Col>
                <BackButton callback={() => navigate(-1)} />
                <OptionsModule event={event} remove={deletConfirmation} edit={updateEvent}/>

                <ImgCnt>
                    <Slider images={event.images}/>
                </ImgCnt>

                <InfoCnt id="info">
                    <DetailTitle>{event.title}</DetailTitle>
                    <ModuleDetails event={event} participations={participations} />
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                    <JoinButton content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} color={event.participant ? "var(--button-unjoin)" : ""} />
                </InfoCnt>
            </Col>
        </NoNavView>
    )
}