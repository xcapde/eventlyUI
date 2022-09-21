import { useState } from "react";

const useModal = () => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const [modalIsAsking, setModalIsAsking] = useState(false);
    const [modalIsAlert, setModalIsAlert] = useState(false);
    const [message, setMessage] = useState();
    
    const runModal = (msg) => {
        setModalIsActive(true);
        setModalIsAsking(false);
        setModalIsAlert(false)
        setMessage(msg);
        setTimeout(()=>setModalIsActive(false), 1500);
    }

    const runAskingModal = (msg) => {
        setModalIsActive(true);
        setModalIsAsking(true);
        setModalIsAlert(false)
        setMessage(msg);
    }

    const runAlertModal = (msg) => {
        setModalIsActive(true);
        setModalIsAsking(false);
        setModalIsAlert(true);
        setMessage(msg)
    }

    return{
        modalIsAlert,
        modalIsActive,
        modalIsAsking,
        message,
        setModalIsActive,
        setModalIsAsking,
        runAlertModal,
        runAskingModal,
        runModal
    }
}

export default useModal; 