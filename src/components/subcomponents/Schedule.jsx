import { Row } from "../../styles/styles.styled"
import { Date } from "./Date"
import { Time } from "./Time"

export const Schedule = ({ event, fontSize}) => {

    return (
        <Row width='300px' justifyContent='flex-start' gap='35px' >
            <Date event={event} fontSize={fontSize}/>
            <Time event={event} fontSize={fontSize}/>
        </Row>
    )
}

