import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BackButton } from "../components/buttons"
import { ModuleContent } from "../components/eventInfo/ModuleContent"
import { ModuleDetails } from "../components/eventInfo/ModuleDetails";
import { Footer } from "../components/footer/Footer";
// import { MenuModule } from "../components/optionsMenu/MenuModule"
import { DetailParticipation } from "../components/subcomponents";
import { DetailFooter, DetailHeader, DetailImg } from "../pages/Detail/detail.styled";
import { Col, View, Wrapper } from "../styles/styles.styled";


export const MobileDetail = ({ event }) => {
    const navigate = useNavigate();
    const [key, setKey] = useState("description");
    const tabContent = ["description", "requirements", "tags", "map"];

    useEffect(() => {
        if (!key) return;
    }, [key, event])

    return (
        <View id="view">
            <BackButton callback={() => navigate(-1)} />
            {/* <MenuModule/> */}
            <DetailImg imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />

            <Col height={'calc(100% - var(--detail-image-height))'} width={'var(--page-width)'}>
                <DetailHeader>
                    <ModuleDetails event={event} />
                </DetailHeader>
                <ModuleContent callback={setKey} tabContent={tabContent} field={key} event={event} />
                <DetailFooter>
                    <DetailParticipation participation={event.participantsCount} />
                </DetailFooter>
            </Col>
        </View>
    )
}