import { Row, Title, View } from "../../styles/styles.styled"
import { Footer } from "../../components/footer/Footer"
import { NavTop } from "../../components/navs/NavTop"
import { useState } from "react"
import { ModuleVerticalSmallCard } from "../../components/feeds/ModuleVerticalSmallCard"
import { SearchInput } from "./SearchInput"
import { FilterButton } from "../../components/buttons"

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    // const [searchList, setSearchList] = useState([]);
    // const [tagValue, setTagValue] = useState('');


    const onInputChange=(e)=>{
        const value = e.target.value;
        setSearchValue(value);  
    }    

    const handleSubmit=(e)=>{
        e.preventDefault(); 
    }


    return (
        <View height='80%'>
            <NavTop/>
            {/* {tagValue?
                <Row height='15vh' width="90%">
                    <Title>{tagValue}</Title>
                </Row>
                : */}

                <Row height='15vh' width="90%">
                        <SearchInput submit={handleSubmit} callback={onInputChange} data={searchValue ||''} field={"search.."}/>               
                        <FilterButton/>
                        {/* <FiltersModule/> */}
                </Row>

                {/* } */}

                <ModuleVerticalSmallCard title={''} event={[]}/>

            <Footer/>
        </View>
    )
}