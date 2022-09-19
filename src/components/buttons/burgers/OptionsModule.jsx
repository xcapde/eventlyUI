import React from "react"
import useOptions from "../../../hooks/useOptions";
import { CloseButton } from "../CloseButton";
import { EllipsisButton } from "./EllipsisButton";
import { Options } from "./Options";

export const OptionsModule = ({ event, remove, edit }) => {
    const { optionsIsActive, showOptions } = useOptions(false);

    return (
        <React.Fragment>
            {optionsIsActive ?
                <React.Fragment>
                    <Options event={event} remove={remove} edit={edit} />
                    <CloseButton callback={showOptions} />
                </React.Fragment>
                :
                <EllipsisButton callback={showOptions} />
            }
        </React.Fragment>
    )
}