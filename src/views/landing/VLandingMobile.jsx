import { useState } from "react";
import { JoinButton } from "../../components/buttons";
import { Logo } from "../../components/logo/Logo";
import { ViewPicker } from "../../components/subcomponents/ViewPicker";
import { Col, Img } from "../../styles/styles.styled";
import { MobileCnt } from "./landing.styled";

export const VLandingMobile = ({ goHome }) => {

    const [view, setView] = useState(0);
    const [start, setStart] = useState();
    const views = [
        { title: "Welcome to Evently", description: "Share yourself", element: null, logo: true },
        { title: "", description: "Join events happening next to you or a miles a way.", element: <Img imgUrl={'https://res.cloudinary.com/dkju5on5v/image/upload/v1664182340/party-hard_rnnfp7.png'}/>, logo: false },
        { title: "", description: "Schedule your life putting yourself first.", element: <Img imgUrl={'https://res.cloudinary.com/dkju5on5v/image/upload/v1664182344/planning-hard_smnnm9.png'}/>, logo: false },
        { title: "", description: "Start sharing your social life!", element: <JoinButton content={'Get started'} callback={goHome} />, logo: false }
    ]

    const slide = (end) => {
        if (Math.abs(end - start) < 50) return;
        if ((view === 0 && end < start) || (view === views.length - 1 && end > start)) return;
        end > start ? setView(view + 1) : setView(view - 1);

    }

    return (
        <MobileCnt onTouchStart={(e) => setStart(e.changedTouches[0].clientX)} onTouchEnd={(e) => slide(e.changedTouches[0].clientX)}>
            <Col height="15%" />
            <Col height="60%" justifyContent="center" alignItems="center" gap="5rem">
                <Col height="20%">
                    {views[view].logo ? <Logo scale={1.5} /> : null}
                </Col>
                <Col height="50%" gap="5rem">
                    <h1>{views[view].title}</h1>
                    <h3>{views[view].description}</h3>
                </Col>
                <Col height="30%">
                    {views[view].element}
                </Col>
            </Col>
            <Col height="25%">
                <ViewPicker views={views} current={view} setView={setView} />
            </Col>
        </MobileCnt>
    );
}