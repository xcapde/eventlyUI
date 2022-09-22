import { useEffect, useState } from "react";
import { unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import { BackButtonRelative } from "../../components/buttons";
import { TitleCard } from "../../components/cards/cards.styled";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavRail } from "../../components/navs";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Page, Row, View } from "../../styles/styles.styled";
import format from "../../utils/format";
import { Wrapper } from "./search.styled";

export const TagSearch = () => {
    const [eventsByTag, setEventsByTag] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const tagName = location.search.split("=")[1];

    useEffect(() => {
        if (!tagName) return;
        getEventsByTag(tagName)
    }, [tagName]);

    const getEventsByTag = (tagName) => {
        eventService.getEventsByTag(tagName).then(res => {
            if (!res) return
            setEventsByTag(res)
        })
    }

    return (
        <Page>
            <NavTop />
            <NavRail />
            <View height='80%'  heightD='90%' topD="0vh">
                <Wrapper>
                    <Row height='10%'>
                        <Col width='4rem' alignItems='flex-start'>
                            <BackButtonRelative callback={() => navigate(-1)} />
                        </Col>
                        <Col>
                            <TitleCard>By tag: {format.uppercaseFirstLetter(tagName)}</TitleCard>
                        </Col>
                    </Row>

                    <Col height='90%'>
                        {eventsByTag && eventsByTag.length > 0 ?
                            <ModuleVerticalMultiCard tag={tagName} events={eventsByTag} title={eventsByTag.length === 1 ? `${eventsByTag.length} event found` : eventsByTag.length > 1 ? `${eventsByTag.length} events found` : ''} />
                            :
                            <DetailText>There are no events with this tag.</DetailText>
                        }
                    </Col>
                </Wrapper>
            </View>
            <Footer />
        </Page>

    )
}