import { useState } from "react";

const useOptions = () => {
    const [optionsIsActive, setOptionsIsActive] = useState(false);
    const showOptions=()=>{
        setOptionsIsActive(!optionsIsActive);
      };

    return{
        optionsIsActive,
        showOptions
    }
}

export default useOptions; 