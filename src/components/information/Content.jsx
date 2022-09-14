import { useEffect } from "react"
import { Col } from "../../styles/styles.styled"
import { Badge } from "../badges/Badge"

export const Content = ({ field, event }) => {

    useEffect(() => {
    }, [field, event]);

    return (
        <Col>
            {field && (field !== "description" && field !== "map") ?
                event[field].map((item, key) => <Badge key={key} content={item} field={field} />)
                : field === "description" ? <h1>{event[field]}</h1> : 'NO FIELD IN EVENT (MAP)'
            }
        </Col>
    )
}