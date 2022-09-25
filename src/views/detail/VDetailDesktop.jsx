import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../../components/avatar/Avatar";
import { BackButton, JoinButton } from "../../components/buttons"
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule"
import { TitleCard } from "../../components/cards/cards.styled"
import { ModuleVerticalUserCard } from "../../components/feeds/ModuleVerticalUserCard";
import { ModuleContent } from "../../components/information/ModuleContent";
import { Slider } from "../../components/slider/Slider";
import { Col, DetailText, NoNavView, Row, Wrapper } from "../../styles/styles.styled";
import { MainDesktop, ModuleCnt } from "./detail.styled";
import { Details } from "../../components/information/Details";
import { FeedTitle } from "../../components/feeds/feed.styled";
import { MainDetailDesktop } from "../../components/modules/detail/MainDetailDesktop";
import { ParticipantsDetailDesktop } from "../../components/modules/detail/ParticipantsDetailDesktop";

export const VDetailDesktop = ({ event, participations, join, unjoin, deletConfirmation, updateEvent }) => {
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags"];
    const navigate = useNavigate();

    return (
        <NoNavView id="no-nav" displayM="none">
            <BackButton callback={() => navigate(-1)} />
            <OptionsModule event={event} remove={deletConfirmation} edit={updateEvent} />
            <MainDesktop>
                <Slider images={event.images} />
                <MainDetailDesktop event={event} join={join} unjoin={unjoin} />

                <ParticipantsDetailDesktop participations={participations} event={event}/>
              
                <ModuleCnt overflowY='none'>
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                </ModuleCnt>
                
            </MainDesktop>
        </NoNavView>
    )
}


