import React from "react"
import { BtnCont } from "./buttons.styled"

export const CloseButton = ({callback}) => {
    
    return(
        <BtnCont onClick={callback}>
            <i className="fa-solid fa-xmark"></i>
        </BtnCont>
    )
}