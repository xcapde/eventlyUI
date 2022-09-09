import { NavTabs } from "../../pages/Detail/detail.styled"
import { ContentTabButton } from "../buttons/buttons.styled"

export const EventNav = ({ callback, tabContent }) => {
    return (
        <NavTabs>
            {tabContent.map((c, key) => (<ContentTabButton key={key} onClick={() => callback(c)}>{c}</ContentTabButton>))}
        </NavTabs>
    )
}