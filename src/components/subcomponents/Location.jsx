import React from "react"
import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Location = ({ event, fontSize}) => {
    return (
        <Row>
            <DetailIcon fontSize={fontSize}>
                <i className="fa-solid fa-location-dot"></i>
            </DetailIcon>
            <DetailText width='100%' textTransform='capitalize' lineHeight='18px' fontSize={fontSize}>
                    {event.location ?
                        `${event.location.substring(0, (event.location.lastIndexOf(',') - 3))}` 
                        : 
                        'location'
                    }
            </DetailText>
        </Row>
    )
}