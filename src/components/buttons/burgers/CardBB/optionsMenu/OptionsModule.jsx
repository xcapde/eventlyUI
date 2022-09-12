import React from "react"
import useShowMenu from "../../../../../hooks/useShowMenu";
import { CloseButton } from "../../../CloseButton";
import { EllipsisButton } from "./EllipsisButton";
import { Options } from "./Options";

export const OptionsModule = () => {
    const {menuIsActive, showMenu} = useShowMenu(false);

    return(
        <React.Fragment>            
            {menuIsActive?
                <React.Fragment>
                    <Options/>
                    <CloseButton callback={showMenu}/>
                </React.Fragment>
                :
                <EllipsisButton callback={showMenu}/>
            }          
        </React.Fragment>
    )
}