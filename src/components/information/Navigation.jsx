import { TabButton } from "../buttons/buttons.styled"
import { NavTabs } from "./information.styled"

export const Navigation = ({ callback, tabContent, field }) => {

    console.log(field)
    return (
        <NavTabs>
            {tabContent.map((tab, key) => (
                <TabButton
                    key={key}
                    onClick={() => callback(tab)}
                    color={tab === field ? 'var(--color-main)' : ''}
                >
                    {tab.includes('_') ? tab.split("_").join(" ") : tab}
                </TabButton>))}
        </NavTabs>
    )
}