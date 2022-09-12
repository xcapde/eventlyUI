import { Row } from "../../styles/styles.styled"
import { Publisher } from "../subcomponents"
import { Details } from "./Details"

export const ModuleDetails = ({event}) => {
    return(
        <Row style={{height:'30vh'}}>
            <Details event={event}/>
            <Publisher event={event} scale={'0.6'}/>
        </Row>
    )
}