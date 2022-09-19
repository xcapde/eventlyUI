import { useState } from "react";

const useModal = () => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const [modalIsAsking, setModalIsAsking] = useState(false);
    const [message, setMessage] = useState();
    
    const showModal=({msg})=>{
        setModalIsActive(true)
        setModalIsAsking(false)
        setMessage(msg)
        setTimeout(()=>setModalIsActive(false), 5000);
        console.log(msg)
      };



    return{
        modalIsActive,
        message,
        modalIsAsking,
        setModalIsActive,
        setModalIsAsking,
        showModal
    }
}

export default useModal; 