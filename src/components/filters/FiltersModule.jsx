import React from "react";
import useFilter from "../../hooks/useFilter";
import { FilterButton } from "../buttons";
import { Filters } from "./Filters";

export const FiltersModule = () => {
    const { filterIsActive, showFilter } = useFilter(false);

    return (
        <React.Fragment>
            {filterIsActive ?
                <React.Fragment>
                    <Filters/>
                    <FilterButton callback={showFilter} />
                </React.Fragment>
                :
                <FilterButton callback={showFilter} />
            }
        </React.Fragment>
    )
}