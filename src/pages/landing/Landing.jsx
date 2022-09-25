import { useNavigate } from "react-router-dom";
import { Page } from "../../styles/styles.styled";
import { VLandingDesktop } from "../../views/landing/VLandingDesktop";
import { VLandingMobile } from "../../views/landing/VLandingMobile";

export const Landing = () => {

    const navigate = useNavigate();
    const goHome = () => navigate("/home");
    const goLogin = () => navigate("/log-in");
    const goSignup = () => navigate("/sign-up");

    return (
        <Page>
            <VLandingMobile goHome={goHome} goLogin={goLogin} goSignup={goSignup} />
            <VLandingDesktop goHome={goHome} goLogin={goLogin} goSignup={goSignup} />
        </Page>
    )
}