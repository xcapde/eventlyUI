import { Col, DetailText, Row, View } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavTop } from "../../components/navs/NavTop"
import { useState } from "react"
import { FilterButton } from "../../components/buttons"
import { SearchInput } from "../../components/forms/SearchInput"
import { eventService } from "../../services/API/eventService"
import { Wrapper } from "./search.styled"
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard"
import { FeedTitle } from "../../components/feeds/feed.styled"
import { FiltersModule } from "../../components/filters/FiltersModule"
import { NavRail } from "../../components/navs"

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchList, setSearchList] = useState();


    const onInputChange=(e)=>{
        const value = e.target.value;
        setSearchValue(value); 
        if(value.length === 0){
            setSearchList();
        }
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
            <NavRail/>
                <Wrapper>
                    <Row height='15%' width="90%">
                            <SearchInput submit={handleSubmit} callback={onInputChange} data={searchValue || ''} field={"search.."}/>               
                            {/* <FilterButton/> */}
                            <FiltersModule/>
                    </Row>
                    
                    
                    <Col height='85%'>
                        {searchList && searchList.length > 0 ?
                        <ModuleVerticalMultiCard events={searchList} title={searchList.length === 1?`${searchList.length} event found`: searchList.length > 1? `${searchList.length} events found` : ''}/>
                        :
                        <DetailText>There are no results.</DetailText>
                        }
                    </Col>
                </Wrapper>

            <Footer/>
        </View>
    )
}