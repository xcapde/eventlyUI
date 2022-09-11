import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { Col, Row, Title, View } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { MinimalCard } from "../cards/MinimalCard";
import { SmallCard } from "../cards/SmallCard";
import { VerticalFeed } from "./feed.styled";

export const EventFeed = () => {
    const [events, setEvents] = useState([]);
    const [tagsSearch, setTagsSearch] = useState(true);

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = () => {
        eventService.getAllEvents().then(res => {
            if (!res) return
            setEvents(res)
        })
    }

    const getAllTags = () => {

    }

    return (
        <View>
            <Row style={{ height: 'fit-content' }}>tags scroll x</Row>
            <Col style={{ gap: '5%', justifyContent: "space-evently" }}>
                {!tagsSearch &&
                    <React.Fragment>
                        <Col style={{gap: '2.5%'}}> <noscrip>mida definida</noscrip>
                            <Title>Online</Title>
                            <VerticalFeed>
                                {events && events.map((event, key) =>
                                    <MinimalCard key={key} event={event} />
                                ).reverse()}

                                {events && events.map((event, key) =>
                                    <SmallCard key={key} event={event} />
                                ).reverse()}
                            </VerticalFeed>
                        </Col>


                        <Col style={{ gap: '2.5%' }}> <noscrip>mida definida</noscrip>
                            <Title>Offline</Title>
                            <VerticalFeed>
                                {events && events.map((event, key) =>
                                    <MinimalCard key={key} event={event} />
                                ).reverse()}

                                {events && events.map((event, key) =>
                                    <SmallCard key={key} event={event} />
                                ).reverse()}
                            </VerticalFeed>
                        </Col>
                    </React.Fragment>
                }
                {tagsSearch && <Col style={{ gap: '2.5%' }}>
                    <Title>Offline</Title>
                    <VerticalFeed>
                        {events && events.map((event, key) =>
                            <MinimalCard key={key} event={event} />
                        ).reverse()}

                        {events && events.map((event, key) =>
                            <SmallCard key={key} event={event} />
                        ).reverse()}
                    </VerticalFeed>
                </Col>}
            </Col>
        </View >
    )
}

{/* {events.map((event,key) =>
<MainCard key={key} event={event}/>
).reverse()} */}