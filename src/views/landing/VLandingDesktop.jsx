import { DesktopCnt } from "./landing.styled";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { Col, Row } from "../../styles/styles.styled";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../../components/buttons";

export const VLandingDesktop = () => {

    const navigate = useNavigate();

    return (
        <DesktopCnt>
            <Row>
                <Col>
                    <Col gap="5rem" height="50%">
                        <h1>Welcome to Evently!</h1>
                        <h3>Share your hobbies</h3>
                    </Col>
                    <PrimaryButton content={'Get started'} callback={()=>navigate("/home")} />
                </Col>
                <Col position="relative">
                    <Row>
                        <SecondaryButton content={"Log in"} callback={()=>navigate("/log-in")}/>
                        <SecondaryButton  content={"Sign up"} callback={()=>navigate("/sign-up")}/>
                    </Row>
                </Col>
            </Row>
        </DesktopCnt>
    )
}