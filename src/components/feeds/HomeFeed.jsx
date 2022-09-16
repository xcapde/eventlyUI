import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { tagService } from "../../services/API/tagService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMidCard } from "./ModuleHorizontalMidCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";

export const HomeFeed = ({ events, tags, tag, setTag, eventsByTag, setEventsByTag, onlineEvents, offlineEvents, seeAll, setSeeAll, participations }) => {
  
    return (
        <View>
            <Col justifyContent='flex-start' style={{ marginTop: '5%', width: '95%' }}>
                <Row height='unset' style={{ justifyContent: 'flex-end' }}>
                    {tag ?
                        <LinkButton callback={() => { setTag(); setEventsByTag(); setSeeAll(false) }} content={'Clear'} />
                        :
                        !seeAll ?
                            <LinkButton callback={() => { setSeeAll(true); setTag(); setEventsByTag() }} content={'See All'} /> :
                            <LinkButton callback={() => { setSeeAll(false); setTag(); setEventsByTag() }} content={'By type'} />}
                </Row>
                <ModuleTags tags={tags} callback={(data) => { setTag(data); setSeeAll(false) }} />
                {!eventsByTag && !seeAll &&
                    <React.Fragment>
                        <ModuleHorizontalMidCard title={'Offline'} events={offlineEvents} />
                        <ModuleVerticalSmallCard title={'Online'} events={onlineEvents} />
                    </React.Fragment>
                }

                {!seeAll && eventsByTag &&
                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        {eventsByTag.length > 0 ?
                            <ModuleVerticalMainCard title={'By tag'} events={eventsByTag} width={'29rem'} />
                            :
                            <DetailText>There are no events with {tag}</DetailText>
                        }
                    </Col>
                }
                {seeAll && !eventsByTag &&
                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        {events.length > 0 ?
                            <ModuleVerticalMainCard title={'All'} events={events} width={'29rem'} />
                            :
                            <DetailText>There are no events</DetailText>
                        }
                    </Col>
                }
            </Col>
        </View >
    )
}