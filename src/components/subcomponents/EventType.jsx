import React from "react"
import { DetailText } from "../../styles/styles.styled"

export const EventType = ({type}) => {
    
    return (
        <DetailText>
            {type === 'online'? 
            <React.Fragment>
                <i className="fa-solid fa-earth-europe"></i> {type}
            </React.Fragment>
            : 
            <React.Fragment>
                <i className="fa-solid fa-link-slash"></i> {type}
            </React.Fragment>
            }
        </DetailText>
    )
}