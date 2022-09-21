import React from "react";
import useFilter from "../../hooks/useFilter";
import { Col } from "../../styles/styles.styled";
import { FilterButton, PrimaryButton, SecondaryButton } from "../buttons";
import { FeedTitle } from "../feeds/feed.styled";
import { ButtonsControl } from "../modal/modal.styled";
import { Filters } from "./Filters";
import { FilterCnt } from "./filters.styled";

export const FiltersModule = () => {
    const { filterIsActive, showFilter } = useFilter(false);

    return (    
            <>
                {filterIsActive?
                <Col width='unset'>
                    <FilterButton callback={showFilter} />
                    
                    <FilterCnt>
                        <FeedTitle>Filter events by:</FeedTitle>
                        <Filters/>
                        <ButtonsControl>
                            <SecondaryButton content={'Cancel'} callback={showFilter}/>
                            <PrimaryButton content={'Filter'} callback={showFilter}/>
                        </ButtonsControl>
                    </FilterCnt>
                </Col>
                :
                <FilterButton callback={showFilter} />
                }
            </>
    )
}