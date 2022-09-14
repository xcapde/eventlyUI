import { Row } from "../../styles/styles.styled"
import { Date } from "./Date"
import { Time } from "./Time"

export const Schedule = ({event}) => {
    
    return (
        <Row style={{gap:'2rem'}}>
            <Date event={event} />
            <Time event={event} />  
        </Row>
    )
}

