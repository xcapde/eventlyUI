import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { AuthService } from "../../../../../services/AuthService";
import { OptionButton } from "../../../OptionButton";
import { OptionsCnt } from "./options.styled";

export const Options = ({callback, event}) => {
    const location = useLocation().pathname
    useEffect(()=>{
        console.log(location)
    })

    return(
        <React.Fragment>
            {location.includes('/events/') && 
                <OptionsCnt> 
                    {AuthService.isPublisher(event)?
                    <React.Fragment>
                        <OptionButton content={'Delete'} callback={callback}/>
                        <OptionButton content={'Edit'} callback={callback}/>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <OptionButton content={'Report'} callback={callback}/>
                        <OptionButton content={'More'} callback={callback}/>
                    </React.Fragment>
                    }
                </OptionsCnt>                
            }
            {location.includes('/profile') &&
            <OptionsCnt> 
                    <OptionButton content={'Log out'} callback={callback}/>
                    <OptionButton content={'Edit'} callback={callback}/>
            </OptionsCnt>                
        }
        </React.Fragment>
    )
}