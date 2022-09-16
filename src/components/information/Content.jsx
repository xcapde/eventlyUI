import { useEffect } from "react";
import { Badge } from "../badges/Badge";
import { ContentGrid } from "./information.styled";

export const Content = ({ field, event }) => {

    useEffect(() => {
    }, [field, event]);

    return (
        <ContentGrid justify={field !== "description" && field !== "map" ? 'flex-start' : 'center'}>
            {field && (field !== "description" && field !== "map") ?
                event[field].map((item, key) => <Badge key={key} content={item} field={field} />)
                : field === "description" ? <h1>{event[field]}</h1> : 'NO FIELD IN EVENT (MAP)'
            }
        </ContentGrid>
    )
}