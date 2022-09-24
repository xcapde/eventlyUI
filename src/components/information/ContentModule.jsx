import { Content } from "./Content";
import { ContentModuleCnt } from "./information.styled";
import { Navigation } from "./Navigation";

export const ContentModule = ({ callback, tabContent, event, field }) => {

    return (
        <ContentModuleCnt id="content" >
            <Navigation callback={callback} tabContent={tabContent} field={field} />
            <Content event={event} field={field} />
        </ContentModuleCnt>
    )
}