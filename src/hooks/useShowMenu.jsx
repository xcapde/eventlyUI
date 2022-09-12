import { useState } from "react";

const useShowMenu = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const showMenu=()=>{
        setMenuIsActive(!menuIsActive);
      };

    return{
        menuIsActive,
        showMenu
    }
}

export default useShowMenu; 