import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../components/avatar/Avatar"
import { BackButton, JoinButton } from "../components/buttons"
import { OptionsModule } from "../components/buttons/burgers/OptionsModule"
import { TitleCard } from "../components/cards/cards.styled"
import { ModuleContent } from "../components/information/ModuleContent"
import { ParticipationModule } from "../components/participations/ParticipationModule"
import { Slider } from "../components/slider/Slider"
import { Col, NoNavView, Row, Title } from "../styles/styles.styled"
import format from "../utils/format"
import { MainDesktop, ModuleCnt, ModuleIcon, ModuleTitle } from "./detail.styled"

export const VDetailDesktop = ({ event, participations, join, unjoin, deletConfirmation, updateEvent }) => {
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags"];
    const navigate = useNavigate();

    return (
        <NoNavView id="no-nav" displayM="none">
            <BackButton callback={() => navigate(-1)} />
            <OptionsModule event={event} remove={deletConfirmation} edit={updateEvent} />
            <MainDesktop>
                <Slider images={event.images}/>
                
                <ModuleCnt>
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                </ModuleCnt>
                
                <Col>
                    <Col justifyContent="flex-start">
                        <Row height='5rem%'>
                            <Title>{event.title}</Title>
                            <Avatar imgUrl={event.publisher.avatar} publisher={event.publisher} />
                        </Row>
                        <Col height='30%' id="info">
                            <Row>
                                <TitleCard>{format.eventDateToCalendarDate(event.date)}</TitleCard>
                                <TitleCard>{event.hour}</TitleCard>
                            </Row>
                            <TitleCard>{event.type === "online" ? event.url: event.location}</TitleCard>   
                        </Col>
                    </Col>

                    <Row height='30%'>
                        <JoinButton content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} color={event.participant ? "var(--button-unjoin)" : ""} />
                    </Row>
                </Col>
                

                <Row>
                    <ModuleCnt>
                        <ModuleTitle> 
                            <ModuleIcon><i className="fa-solid fa-user"></i></ModuleIcon>
                            {event.participantsCount === 0? `Be the first to join!` : event.participantsCount === 1? `${event.participantsCount} person joined!` : `${event.participantsCount} people joined!`}
                        </ModuleTitle>
                        <ParticipationModule participations={participations} participantsCount={event.participantsCount} />
                    </ModuleCnt>
                    <ModuleCnt>
                        <ModuleTitle>
                            {/* <ModuleIcon><i className="fa-solid fa-cloud-sun"></i></ModuleIcon>
                            Wheather forecast */}
                            <ModuleIcon><i className="fa-solid fa-map-location-dot"></i></ModuleIcon>
                            Map
                        </ModuleTitle>
                        Content
                    </ModuleCnt>
                </Row>
            </MainDesktop>
        </NoNavView>
    )
}