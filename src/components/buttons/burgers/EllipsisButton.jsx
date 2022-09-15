import { EllipsisBtn } from "../buttons.styled"

export const EllipsisButton = ({ callback }) => {

    return (
        <EllipsisBtn onClick={()=>callback()}/>
    )
}