import { useState } from "react";
import { JoinButton } from "../../components/buttons";
import { Logo } from "../../components/logo/Logo";
import { ViewPicker } from "../../components/subcomponents/ViewPicker";
import { Col } from "../../styles/styles.styled";
import { MobileCnt } from "./landing.styled";

export const VLandingMobile = ({ goHome }) => {

    const [view, setView] = useState(0);
    const [start, setStart] = useState();
    const views = [
        { title: "Welcome to Evently", description: "Share your hobbies", element: <Logo scale={1.5} /> },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", element: null },
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", element: <JoinButton content={'Get started'} callback={goHome} /> }
    ]

    const slide = (end) => {
        if ((view === 0 && end < start) || (view === views.length - 1 && end > start)) return;
        end > start ? setView(view + 1) : setView(view - 1);

    }

    console.log(view)
    return (
        <MobileCnt onTouchStart={(e) => setStart(e.changedTouches[0].clientX)} onTouchEnd={(e) => slide(e.changedTouches[0].clientX)}>
            <Col height="15%" />
            <Col height="60%" justifyContent="center" alignItems="center" gap="5rem">
                <Col height="90%" gap="5rem">
                    <h1>{views[view].title}</h1>
                    <h3>{views[view].description}</h3>
                </Col>
                <Col height="10%">
                    {views[view].element}
                </Col>
            </Col>
            <Col height="25%">
                <ViewPicker views={views} current={view} setView={setView} />
            </Col>
        </MobileCnt>
    );
}