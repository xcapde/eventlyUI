import { Row, View } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavTop } from "../../components/navs/NavTop"
import { useState } from "react"
import { FilterButton } from "../../components/buttons"
import { SearchInput } from "../../components/forms/SearchInput"
import { eventService } from "../../services/API/eventService"
import { Wrapper } from "./search.styled"
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard"

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchList, setSearchList] = useState();


    const onInputChange=(e)=>{
        const value = e.target.value;
        setSearchValue(value); 
        if(value.length < 3) return;
        getEventsBySearch(value);
    }    

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        getEventsBySearch(searchValue);
    }

    const getEventsBySearch = (searchValue) => {
        eventService.getEventsBySearch(searchValue).then(res => {
            if(!res)return
            setSearchList(res)
        })
    }


    return (
        <View height='80%'>
            <NavTop/>
                <Wrapper>
                    <Row height='15%' width="90%">
                            <SearchInput submit={handleSubmit} callback={onInputChange} data={searchValue || ''} field={"search.."}/>               
                            <FilterButton/>
                            {/* <FiltersModule/> */}
                    </Row>

                    <ModuleVerticalMultiCard title={searchList?'Your results':''} events={searchList} height={'85%'}/>
                </Wrapper>

            <Footer/>
        </View>
    )
}