import { useEffect, useState } from "react";
import { CancelButton } from "../../components/buttons";
import { ModuleVerticalSmallCard } from "../../components/feeds/ModuleVerticalSmallCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Row, Title, View } from "../../styles/styles.styled";

export const TagSearch = ({callback}) => {
    const [tag, setTag] = useState();
    const [eventsByTag, setEventsByTag] = useState();    

    useEffect(()=>{
        if(!tag) return;
        getEventsByTag(tag)
    },[tag]);

    const getEventsByTag = (tag) => {
        eventService.getEventsByTag(tag).then(res => {
            if (!res) return
            setEventsByTag(res)
        })
    }

    return (
        <View height='80%'>
            <NavTop/>        
                <Row height='15vh' width="100%" style={{backgroundColor:"var(--color-dark)", color:'var(--color-white-contrast)'}}>
                        <Title height='var(--input-height)'>{tag}</Title>               
                        <CancelButton callback={callback}/>
                </Row>

                <ModuleVerticalSmallCard title={'Tags, o no tags'} event={eventsByTag}/>

            <Footer/>
        </View>
    )
}