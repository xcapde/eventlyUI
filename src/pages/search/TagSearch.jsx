import { useState } from "react";
import { CancelButton } from "../../components/buttons";
import { ModuleVerticalSmallCard } from "../../components/feeds/ModuleVerticalSmallCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { Row, Title, View } from "../../styles/styles.styled";

export const TagSearch = ({callback}) => {
    const [tag, setTag] = useState();
    // const [eventsByTag, setEventsByTag] = useState([]);


    return (
        <View height='80%'>
            <NavTop/>        
                <Row height='15vh' width="100%" style={{backgroundColor:"var(--color-dark)", color:'var(--color-white-contrast)'}}>
                        <Title height='var(--input-height)'>{tag}</Title>               
                        <CancelButton callback={callback}/>
                </Row>

                <ModuleVerticalSmallCard title={''} event={[]}/>

            <Footer/>
        </View>
    )
}