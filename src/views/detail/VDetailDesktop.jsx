import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackButton } from "../../components/buttons"
import { OptionsModule } from "../../components/buttons/burgers/OptionsModule"
import { ModuleContent } from "../../components/information/ModuleContent";
import { Slider } from "../../components/slider/Slider";
import { NoNavView } from "../../styles/styles.styled";
import { MainDesktop, ModuleCnt } from "./detail.styled";
import { MainDetailDesktop } from "../../components/modules/detail/MainDetailDesktop";
import { ParticipantsDetailDesktop } from "../../components/modules/detail/ParticipantsDetailDesktop";

export const VDetailDesktop = ({ event, participations, join, unjoin, deletConfirmation, updateEvent }) => {
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags"];
    const navigate = useNavigate();

    return (
        <NoNavView id="no-nav" displayM="none">
            <BackButton color="var(--color-white)" callback={() => navigate(-1)} />
            <OptionsModule event={event} remove={deletConfirmation} edit={updateEvent} />
            <MainDesktop>
                <Slider images={event.images} />
                <MainDetailDesktop event={event} join={join} unjoin={unjoin} />

                <ParticipantsDetailDesktop participations={participations} event={event} />

                <ModuleCnt overflowY='none'>
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                </ModuleCnt>

            </MainDesktop>
        </NoNavView>
    )
}


