import React from "react"
import useShowMenu from "../../hooks/useShowMenu";
import { BurgerButton, CloseButton } from "../buttons";
import { OptionsMenu } from "./OptionsMenu";

export const MenuModule = () => {
    const {menuIsActive, showMenu} = useShowMenu(false);

    return(
        <React.Fragment>            
            {menuIsActive? 
                <React.Fragment>
                    <CloseButton action={showMenu}/>
                        <OptionsMenu action={showMenu}/>
                        </React.Fragment>
                        :
                        <BurgerButton action={showMenu}/>
            }          
        </React.Fragment>
    )
}