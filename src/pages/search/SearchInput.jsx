import { SearchButton } from "../../components/buttons"
import { Input } from "../../components/forms/form.styled"
import { Searcher } from "./search.styled"

export const SearchInput = ({submit, callback, data, field}) => {
    return(
        <Searcher onSubmit={submit}>
            <SearchButton/>
            {/* <FormControlInput field={"search"} data={searchValue} callback={setSearchValue}/> */}
            <Input onChange={callback} value={data ||''} placeholder={field}/>
        </Searcher>
    )
}