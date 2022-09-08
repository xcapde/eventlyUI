import React from "react"
import { BurgerBtn } from "./buttons.styled"

export const BurgerButton = ({action}) => {
    
    return(
        <BurgerBtn onClick={()=>action()}>
            <i className="fa-solid fa-bars"></i>
        </BurgerBtn>
    )
}