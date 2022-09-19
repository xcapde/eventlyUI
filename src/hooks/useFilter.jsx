import { useState } from "react";

const useFilter = () => {
    const [filterIsActive, setFilterIsActive] = useState(false);
    const showFilter=()=>{
        setFilterIsActive(!filterIsActive);
      };

    return{
        filterIsActive,
        showFilter
    }
}

export default useFilter; 