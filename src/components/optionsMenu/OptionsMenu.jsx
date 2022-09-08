import React from "react"
import { Row } from "../../styles/styles.styled"
import { SecondaryButton } from "../buttons"
import { MenuBox } from "./optionsMenu.styled"

export const OptionsMenu = () => {
    return(
        <React.Fragment>
            <MenuBox> 
                <Row>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <SecondaryButton content={'EDIT'}/>
                </Row>
                <Row>
                    <i className="fa-regular fa-trash-can"></i>
                    <SecondaryButton content={'DELETE'}/>                        
                </Row>
            </MenuBox>
        </React.Fragment>
    )
}