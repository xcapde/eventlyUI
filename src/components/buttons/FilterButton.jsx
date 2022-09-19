import { FiltertBtn } from "./buttons.styled"

export const FilterButton = ({callback}) => {
    
    return(
        <FiltertBtn onClick={callback}/>
    )
}