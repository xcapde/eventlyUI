import React from "react"
import { AuthService } from "../../../../../services/AuthService";
import { OptionButton } from "../../../OptionButton";
import { OptionsCnt } from "./options.styled";

export const Options = ({callback, event}) => {

    return(
        <OptionsCnt> 
            {AuthService.isPublisher(event)?
            <React.Fragment>
                <OptionButton content={'Delete'} callback={callback}/>
                <OptionButton content={'Edit'} callback={callback}/>
            </React.Fragment>
            : 
            <OptionButton content={'Altres'} callback={callback}/>
            }
        </OptionsCnt>                
    )
}