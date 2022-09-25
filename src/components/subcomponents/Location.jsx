import React from "react"
import { useLocation } from "react-router-dom"
import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"
import format from "../../utils/format";

export const Location = ({ event, fontSize}) => {
    const location = useLocation().pathname;

    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-location-dot"></i>
            </DetailIcon>
            <DetailText width='100%' textTransform='capitalize' lineHeight='18px' fontSize={fontSize}>
                    {event.location && (!location.includes(`/events/`) 
                    || location.includes(`published`) 
                    || location.includes(`joined`))?
                        format.shortLocation(event.location)
                        : event.location? 
                        `${event.location.substring(0, (event.location.lastIndexOf(',') - 3))}` 
                        : 
                        'location'
                    }
            </DetailText>
        </Row>
    )
}