import { BurgerBtn } from "../../buttons.styled"

export const BurgerButton = ({ callback }) => {

    return (
        <BurgerBtn onClick={callback}/>
    )
}