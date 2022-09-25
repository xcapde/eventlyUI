import { DesktopCnt } from "./landing.styled";
import { Col, Row } from "../../styles/styles.styled";
import { JoinButton, SecondaryButton } from "../../components/buttons";

export const VLandingDesktop = ({goHome, goLogin, goSignup}) => {

    return (
        <DesktopCnt>
            <Row>
                <Col>
                    <Col gap="5rem" height="50%">
                        <h1>Welcome to Evently!</h1>
                        <h3>Share your hobbies</h3>
                    </Col>
                    <JoinButton content={'Get started'} callback={goHome} />
                </Col>
                <Col>
                    <noscript>image ?</noscript>
                </Col>
                <Row id="buttons">
                    <SecondaryButton content={"Log in"} callback={goLogin} />
                    <SecondaryButton content={"Sign up"} callback={goSignup} />
                </Row>
            </Row>
        </DesktopCnt>
    )
}