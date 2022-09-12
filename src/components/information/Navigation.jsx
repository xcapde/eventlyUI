import { TabButton } from "../buttons/buttons.styled"
import { NavTabs } from "./information.styled"

export const Navigation = ({ callback, tabContent, field }) => {
    return (
        <NavTabs>
            {tabContent.map((tab, key) => (<TabButton color={tab === field ? 'var(--color-main)' : ''}  key={key} onClick={() => callback(tab)}>{tab}</TabButton>))}
        </NavTabs>
    )
}