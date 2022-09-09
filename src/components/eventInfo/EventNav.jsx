import { NavTabs } from "../../pages/Detail/detail.styled"
import { ContentTabButton } from "../buttons/buttons.styled"

export const EventNav = ({ callback, tabContent, field }) => {
    return (
        <NavTabs>
            {tabContent.map((c, key) => (<ContentTabButton color={c === field ? 'var(--color-main)' : ''}  key={key} onClick={() => callback(c)}>{c}</ContentTabButton>))}
        </NavTabs>
    )
}