import React from "react"
import { Row } from "../../styles/styles.styled"
import { MenuBox } from "./optionsMenu.styled"

export const OptionsMenu = () => {
    return(
        <React.Fragment>
            <MenuBox> 
                <Row>
                    <button>
                        <i className="fa-regular fa-pen-to-square"></i> EDIT
                    </button>
                </Row>
                <Row>
                    <button>
                        <i className="fa-regular fa-trash-can"></i> DELETE
                    </button>                     
                </Row>
            </MenuBox>
        </React.Fragment>
    )
}