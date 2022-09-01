import { EventFeed } from "../components/feeds/EventFeed";
import { Sidebar } from "../components/navs/Sidebar";
import { Page } from "../styles/styles.styled";

export function Home() {

    return (
        <Page>
            <Sidebar/>
            <EventFeed />
        </Page>
    )
}