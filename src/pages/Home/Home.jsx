import { HomeFeed } from "../../components/feeds";
import { Footer } from "../../components/footer/Footer";
import { NavRail, NavTop } from "../../components/navs";
import { Page } from "../../styles/styles.styled";

export function Home() {

    return (
        <Page>
            <NavTop/>
            <NavRail />
            <HomeFeed />
            <Footer />
        </Page>
    )
}