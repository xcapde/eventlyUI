import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventService } from "../../services/API/eventService";
import { tagService } from "../../services/API/tagService";
import { Col, Title, View } from "../../styles/styles.styled";
import { MainCard } from "../cards/MainCard";
import { VerticalFeed } from "./feed.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMidCard } from "./ModuleHorizontalMidCard";

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
        })
    }

    
    return (
        <View >
            <Col width='95%' justifyContent='space-evenly'>
                
                <ModuleTags tags={tags}/>
                {!tagsSearch &&
                    <React.Fragment>  
                        <ModuleHorizontalMidCard events={events}/>
                        <ModuleVerticalSmallCard events={events}/> 
                    </React.Fragment>
                }
                {/* react component */}

                {tagsSearch &&
                // <TagsFilter/>

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