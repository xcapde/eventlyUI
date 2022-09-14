import React from "react"
import { DetailIcon, DetailText, Row } from "../../styles/styles.styled"

export const Type = ({event}) => {
    
    return (
        <React.Fragment>
            {event.type === 'online'? 
                <Row>
                    <DetailIcon>
                        <i className="fa-solid fa-earth-europe"></i>
                    </DetailIcon>
                    <DetailText>
                        {event.type}
                    </DetailText>
                </Row>
                : 
                <Row>
                    <DetailIcon>
                        <i className="fa-solid fa-link-slash"></i>
                    </DetailIcon>
                    <DetailText>
                        {event.type}
                    </DetailText>
                </Row>
            }
        </React.Fragment>
    )
}