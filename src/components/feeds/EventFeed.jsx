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
            <Col id="main" sytle={{ justifyContent: 'space-around', gap: '2.5%' }}>
                <Row style={{ height: '10vh', justifyContent: 'flex-start' }}>hi user!</Row>
                <Row style={{ height: '20vh', justifyContent: 'flex-start' }}>tags scroll x</Row>
                {!tagsSearch &&
                    <React.Fragment>
                        {/* react component */}
                        <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                            <Title>Online</Title>
                            <VerticalFeed>
                                {events && events.map((event, key) =>
                                    <MinimalCard key={key} event={event} />
                                ).reverse()}

                                {/* {events && events.map((event, key) =>
                                <SmallCard key={key} event={event} />
                            ).reverse()} */}
                            </VerticalFeed>
                        </Col>

                        {/* react component */}
                        <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                            <Title>Offline</Title>
                            <VerticalFeed>
                                {events && events.map((event, key) =>
                                    <MinimalCard key={key} event={event} />
                                ).reverse()}

                                {/* {events && events.map((event, key) =>
                                <SmallCard key={key} event={event} />
                            ).reverse()} */}
                            </VerticalFeed>
                        </Col>
                    </React.Fragment>
                }
                {/* react component */}
                {tagsSearch &&
                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        <Title>With tag</Title>
                        <VerticalFeed>
                            {events && events.map((event, key) =>
                                <MinimalCard key={key} event={event} />
                            ).reverse()}

                            {/* {events && events.map((event, key) =>
                                <SmallCard key={key} event={event} />
                            ).reverse()} */}
                        </VerticalFeed>
                    </Col>
                }
            </Col>
        </View >
    )
}

{/* {events.map((event,key) =>
<MainCard key={key} event={event}/>
).reverse()} */}