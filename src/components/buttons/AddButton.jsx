import { AddBtn } from "./buttons.styled"

export const AddButton = ({ callback }) => {
    return (
        <AddBtn onClick={callback ? () => callback() : () => console.log('submited')} >
            <i className="fa-solid fa-plus"></i>
        </AddBtn>
    )
}