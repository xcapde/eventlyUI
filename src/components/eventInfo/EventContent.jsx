import { useEffect } from "react"
import { Col } from "../../styles/styles.styled"
import { Badge } from "../badges/Badge"

export const EventContent = ({ field, event }) => {

    useEffect(() => {
    }, [field, event]);

    return (
        <Col justifyContent={'flex-start'} alignItems={'flex-start'}>
            {field && (field !== "description" && field !== "map") ?
                event[field].map(item => <Badge content={item} field={field} />)
                : field === "description" ? <h1>{event[field]}</h1> : 'NO FIELD IN EVENT (MAP)'
            }
        </Col>
    )
}