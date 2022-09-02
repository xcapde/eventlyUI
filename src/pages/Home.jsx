import { EventFeed } from "../components/feeds/EventFeed";
import { Footer } from "../components/footer/Footer";
import { Sidebar } from "../components/navs/Sidebar";
import { Page } from "../styles/styles.styled";

export function Home() {

    return (
        <Page>
            <Sidebar/>
            <EventFeed />
            <Footer/>
        </Page>
    )
}