import { Page } from "../../styles/styles.styled";
import { VLandingDesktop } from "../../views/landing/VLandingDesktop";
import { VLandingMobile } from "../../views/landing/VLandingMobile";

export const Landing = () => {
    return (
        <Page>
            <VLandingMobile />
            <VLandingDesktop />
        </Page>
    )
}