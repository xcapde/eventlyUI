import { Link } from "react-router-dom"
import { SideBarIcon, SideBarItemIconCol, SideBarItemContent, SideBarItemRow } from "./sidebar.styled"

export const SidebarItem = ({ sub, content, callback }) => {

    return (
        <SideBarItemRow onMouseEnter={callback ? (e) => callback(e) : null}>
            <Link to={content.link} name="content">
                <SideBarItemIconCol >
                    <SideBarIcon>{content.icon}</SideBarIcon>
                </SideBarItemIconCol>

                <SideBarItemContent id="sidebar-content" sub={sub}>
                    {content.content}
                </SideBarItemContent>
            </Link>



        </SideBarItemRow >
    )
}