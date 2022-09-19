import { SearchBtn } from "./buttons.styled"

export const SearchButton = ({callback}) => {
    return(
        <SearchBtn onClick={callback}/>
    )
}