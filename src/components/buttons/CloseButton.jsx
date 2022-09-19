import React from "react"
import { CloseBtn } from "./buttons.styled"

export const CloseButton = ({callback}) => {
    
    return(
        <CloseBtn onClick={callback}>
        </CloseBtn>
    )
}