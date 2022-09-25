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
                
                <ModuleCnt overflowY='none'>
                    <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                </ModuleCnt>
                
                <Row gap='20px'>
                    <Col gap='15px' justifyContent="space-between">
                        <FeedTitle>{event.title}</FeedTitle>
                        <Details event={event} fontSize={'var(--font-size-detail-detailDesktop)'} />
                    </Col>
                    <Col width='var(--form-button-width-desktop)' justifyContent='space-between'>
                        <Wrapper gap='0.5rem'>
                            <Avatar imgUrl={event.publisher.avatar} publisher={event.publisher} size={'calc(var(--avatar-size) * 1.5)'} />
                            <DetailText>{event.publisher.username}</DetailText>
                        </Wrapper>
                        <JoinButton widthD='var(--form-button-width-desktop)' content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} color={event.participant ? "var(--button-unjoin)" : ""} />
                    </Col>
                </Row>
                

                <Row>
                    <Wrapper>
                        <TitleCard>People joined</TitleCard>
                        {/* <TitleCard>{event.participantsCount === 0? `Be the first to join!` 
                            : event.participantsCount === 1? `${event.participantsCount} person joined!` 
                                : `${event.participantsCount} people joined!`}</TitleCard> */}
                            <ModuleCnt>
                            <ModuleVerticalUserCard participations={participations} />
                        </ModuleCnt>                        
                    </Wrapper>
                    <Wrapper>
                        <TitleCard>Map</TitleCard>
                        <ModuleCnt>
                            {/* Content */}
                        </ModuleCnt>
                    </Wrapper>
                </Row>
            </MainDesktop>
        </NoNavView>
    )
}