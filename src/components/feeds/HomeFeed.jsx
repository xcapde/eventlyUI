import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { tagService } from "../../services/API/tagService";
import { Col, Row, Title, View } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { SmallCard } from "../cards/SmallCard";
import { VerticalFeed } from "./feed.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMainCard } from "./ModuleHorizontalMainCard";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";

export const HomeFeed = () => {
    const [events, setEvents] = useState([]);
    const [tagsSearch, setTagsSearch] = useState(false);
    const [tags, setTags] = useState([]);


    useEffect(() => {
        getAllData();
        getAllTags();
    }, [])

    const getAllData = () => {
        eventService.getAllEvents().then(res => {
            if (!res) return
            setEvents(res)
        })
    }

    const getAllTags = () => {
        tagService.getAll().then(res => {
            if (!res) return
            setTags(res)
            console.log(res)
        })
    }

    return (
        <View>
            <Col id="main" width='95%' sytle={{ justifyContent: 'space-around', gap: '2.5%' }}>
                
                <Title>Welcome!</Title>
                <Row style={{ height: '10vh', justifyContent: 'flex-start' }}>
                    Hi user!
                </Row>
                
                <Title>Tags</Title>
                <Row style={{ height: '20vh', justifyContent: 'flex-start' }}>
                    <ModuleTags tags={tags}/>
                </Row>
                {!tagsSearch &&

                    <React.Fragment>                      
                        {/* react component */}
                        <ModuleVerticalSmallCard events={events}/>

                        {/* react component */}
                        <ModuleHorizontalMainCard events={events}/>
                        {/* <ModuleVerticalMainCard events={events}/> */}

                    </React.Fragment>
                }
                {/* react component */}
                {tagsSearch &&
                    <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
                        <Title>With tag</Title>
                        <VerticalFeed>
                            {events && events.map((event, key) =>
                                <MainCard key={key} event={event} />
                            ).reverse()}         
                        </VerticalFeed>
                    </Col>
                }
            </Col>
        </View >
    )
}