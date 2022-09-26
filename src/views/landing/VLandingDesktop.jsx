import { DesktopCnt } from "./landing.styled";
import { Col, Row } from "../../styles/styles.styled";
import { JoinButton, SecondaryButton } from "../../components/buttons";
import { Logo } from "../../components/logo/Logo";

export const VLandingDesktop = ({ goHome, goLogin, goSignup }) => {

    return (
        <DesktopCnt>
            <Row>
                <Col justifyContent="flex-start">
                    <Col gap="5rem" height="70%">
                        <Logo scale="1.5" />
                        <h1>Welcome to Evently!</h1>
                        <h3>A social network for you to share your hobbies, interests and skills and schedule your life putting yourself first.</h3>
                    </Col>
                    <JoinButton content={'Get started'} callback={goHome} />
                </Col>
                <Col>
                </Col>
                <Row id="buttons">
                    <SecondaryButton content={"Log in"} callback={goLogin} />
                    <SecondaryButton content={"Sign up"} callback={goSignup} />
                </Row>
            </Row>
        </DesktopCnt>
    )
}