import { EventFeed } from "../../components/feeds/EventFeed";
import { Footer } from "../../components/footer/Footer";
import { NavRail } from "../../components/navs";
import { Page } from "../../styles/styles.styled";

export function Home() {

    return (
        <Page>
            <NavRail />
            <EventFeed />
            <Footer />
        </Page>
    )
}