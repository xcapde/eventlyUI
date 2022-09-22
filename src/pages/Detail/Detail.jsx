import React, { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Modal } from "../../components/modal/Modal";
import { NavRail } from "../../components/navs/NavRail";
import useModal from "../../hooks/useModal";
import { eventService } from "../../services/API/eventService";
import { participationService } from "../../services/API/participationService";
import { Page } from "../../styles/styles.styled";
import { VDetailDesktop } from "../../views/VDetailDesktop";
import { VDetailMobile } from "../../views/VDetailMobile";

export const Detail = () => {
    const [event, setEvent] = useState();
    const [participations, setParticipations] = useState();
    const { modalIsActive, modalIsAsking, modalIsAlert, message, setModalIsActive, runModal, runAskingModal } = useModal();
    
    const navigate = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        if (!id) return;
        getEvent();
        // eslint-disable-next-line
    }, [id]);

    const getEvent = () => {
        eventService.getEvent(id).then(res => {
            if (!res) return;
            setEvent(res);
            getParticipations(id);
        })
    }

    const deletConfirmation = () => {
        runAskingModal(`Delete ${event.title}?`)
    }

    const deleteEvent = () => {
        eventService.deleteEvent(id).then(res => {
            if(!res) return
            runModal(`${event.title} deleted!`)
            setTimeout(()=>navigate('/home'), 1500);
        })
    }

    const getParticipations = () => {
        participationService.getByEventId(id).then(res => {
            if (!res) return;
            setParticipations(res)
        })
    }

    const join = () => {
        participationService.join(id).then(res => {
            if (!res) return;
            runModal(res.message);
            getEvent(id);
        })
    }

    const unjoin = () => {
        participationService.unjoin(id).then(res => {
            if (!res) return;
            runModal(res.message);
            getEvent(id);
        })
    }

    return (
        <Page>
            <NavRail />
            {modalIsActive && <Modal message={message} callback={deleteEvent} modalIsAsking={modalIsAsking} setModalIsActive={setModalIsActive} modalIsAlert={modalIsAlert}/>}
            {event && <VDetailMobile event={event} participations={participations} join={join} unjoin={unjoin} deletConfirmation={deletConfirmation} deleteEvent={deleteEvent}/>}
            {event && <VDetailDesktop event={event} participations={participations} join={join} unjoin={unjoin} deletConfirmation={deletConfirmation} deleteEvent={deleteEvent}/>}
            <Footer />
        </Page>
    )
}