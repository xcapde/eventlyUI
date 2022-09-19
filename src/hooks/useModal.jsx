import { useState } from "react";

const useModal = () => {
    const [modalIsActive, setModalIsActive] = useState();
    const [modalIsAsking, setModalIsAsking] = useState();
    const [message, setMessage] = useState();
    
    const runModal = (msg) => {
        setModalIsActive(true);
        setModalIsAsking(false);
        setMessage(msg);
        // setTimeout(()=>setModalIsActive(false), 1500);
    }

    const runAskingModal = (msg) => {
        setModalIsActive(true);
        setModalIsAsking(true);
        setMessage(msg);
    }

    // const runModal = (msg) => {
    //     setModalIsActive(true)
    //     setMessage(msg)
    //     {!modalIsAsking?
    //         setTimeout(()=>setModalIsActive(false), 1500)
    //     : 
    //         console.log('asking')}
    // }

    return{
        modalIsActive,
        modalIsAsking,
        message,
        setModalIsActive,
        setModalIsAsking,
        runAskingModal,
        runModal
    }
}

export default useModal; 