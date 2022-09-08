import React from "react"
import { BurgerBtn } from "./buttons.styled"

export const CloseButton = ({action}) => {
    
    return(
        <BurgerBtn onClick={()=>action()}>
            <i className="fa-solid fa-xmark"></i>
        </BurgerBtn>
    )
}