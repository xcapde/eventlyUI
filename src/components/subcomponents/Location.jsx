import React from "react"
import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Location = ({ event }) => {
    return (
        <Row>
            <DetailIcon>
                <i className="fa-solid fa-location-dot"></i>
            </DetailIcon>
            <DetailText style={{ textTransform: 'capitalize', lineHeight: '20px' }}>
                    {event.location ?
                        `${event.location.substring(0, (event.location.lastIndexOf(',') - 3))}` 
                        : 
                        'location'
                    }
            </DetailText>
        </Row>
    )
}