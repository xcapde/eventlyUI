import React from "react"
import { SecondaryButton, CloseButton } from "../../..";
import { OptionsCnt } from "./options.styled";

export const Options = ({callback}) => {

    return(
        <OptionsCnt> 
                <SecondaryButton content={'EDIT'}/>
                <SecondaryButton content={'DELETE'}/>
        </OptionsCnt>                
    )
}