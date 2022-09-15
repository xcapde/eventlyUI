import React from "react"
import useShowMenu from "../../../hooks/useShowMenu";
import { CloseButton } from "../CloseButton";
import { EllipsisButton } from "./EllipsisButton";
import { Options } from "./Options";

export const OptionsModule = ({ event, remove, edit }) => {
    const { menuIsActive, showMenu } = useShowMenu(false);

    return (
        <React.Fragment>
            {menuIsActive ?
                <React.Fragment>
                    <Options event={event} remove={remove} edit={edit} />
                    <CloseButton callback={showMenu} />
                </React.Fragment>
                :
                <EllipsisButton callback={showMenu} />
            }
        </React.Fragment>
    )
}