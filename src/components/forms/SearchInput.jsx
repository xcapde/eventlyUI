import { SearchButton } from "../buttons"
import { Input, Searcher } from "./form.styled"

export const SearchInput = ({submit, callback, data, field}) => {
    return(
        <Searcher onSubmit={submit}>
            <SearchButton/>
            <Input onChange={callback} value={data ||''} placeholder={field}/>
        </Searcher>
    )
}