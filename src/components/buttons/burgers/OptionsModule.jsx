import React from "react"
import useOptions from "../../../hooks/useOptions";
import { CloseButton } from "../CloseButton";
import { EllipsisButton } from "./EllipsisButton";
import { Options } from "./Options";

export const OptionsModule = ({ event, remove, edit }) => {
    const { optionsIsActive, showOptions } = useOptions(false);

    return (
        <React.Fragment>
            {optionsIsActive &&
                    <Options event={event} remove={remove} edit={edit} callback={showOptions}/>}
            {optionsIsActive? <CloseButton callback={showOptions}/> : <EllipsisButton callback={showOptions}/>}
        </React.Fragment>
    )
}