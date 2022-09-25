import { Content } from "./Content";
import { ModuleContentCnt } from "./information.styled";
import { Navigation } from "./Navigation";

export const ModuleContent = ({ callback, tabContent, event, field }) => {

    return (
        <ModuleContentCnt id="content" >
            <Navigation callback={callback} tabContent={tabContent} field={field} />
            <Content event={event} field={field} />
        </ModuleContentCnt>
    )
}