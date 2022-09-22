import { Slider } from "../components/slider/Slider"
import { NoNavView } from "../styles/styles.styled"
import { MainDesktop } from "./detail.styled"

export const VDetailDesktop = ({ event, participations, join, unjoin, deletConfirmation }) => {
    return (
        <NoNavView id="no-nav" displayM="none">
            <MainDesktop>
                <Slider images={event.images}/>
                <div></div>
                <div></div>
                <div></div>
            </MainDesktop>
        </NoNavView>
    )
}