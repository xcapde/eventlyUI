import { NavTabs } from "../../pages/Detail/detail.styled"
import { ContentTabButton } from "../buttons/buttons.styled"

export const EventNav = ({action, tabContent}) => {


    return(
        <NavTabs>
            {tabContent.map((c, key)=> (<ContentTabButton onClick={()=>action(c)}>{c}</ContentTabButton>))}
        </NavTabs>
    )
}