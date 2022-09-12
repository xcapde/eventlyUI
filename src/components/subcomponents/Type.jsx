import React from "react"
import { SecondaryText } from "../../styles/styles.styled"

export const Type = ({event}) => {
    
    return (
        <SecondaryText>
            {event.type === 'online'? 
            <React.Fragment>
                <i className="fa-solid fa-earth-europe"></i> {event.type}
            </React.Fragment>
            : 
            <React.Fragment>
                <i className="fa-solid fa-link-slash"></i> {event.type}
            </React.Fragment>
            }
        </SecondaryText>
    )
}