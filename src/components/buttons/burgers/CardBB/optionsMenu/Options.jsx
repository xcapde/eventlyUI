import React from "react"
import { OptionButton } from "../../../OptionButton";
import { OptionsCnt } from "./options.styled";

export const Options = ({callback}) => {

    return(
        <OptionsCnt> 
                <OptionButton content={'Edit'} callback={callback}/>
                <OptionButton content={'Delete'} callback={callback}/>
        </OptionsCnt>                
    )
}