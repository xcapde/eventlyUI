import React from "react"
import useShowMenu from "../../../../../hooks/useShowMenu";
import { CloseButton } from "../../../CloseButton";
import { EllipsisButton } from "./EllipsisButton";
import { Options } from "./Options";

export const OptionsModule = ({callback, event}) => {
    const {menuIsActive, showMenu} = useShowMenu(false);

    return(
        <React.Fragment>            
            {menuIsActive?
                <React.Fragment>
                    <Options event={event} callback={callback}/>
                    <CloseButton callback={showMenu}/>
                </React.Fragment>
                :
                <EllipsisButton callback={showMenu}/>
            }          
        </React.Fragment>
    )
}