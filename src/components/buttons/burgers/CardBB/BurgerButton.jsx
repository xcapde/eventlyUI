import React from "react"
import { BtnCont } from "../../buttons.styled"

export const BurgerButton = ({ callback }) => {

    return (
        <BtnCont onClick={callback}>
            <i className="fa-solid fa-bars"></i>
        </BtnCont>
    )
}