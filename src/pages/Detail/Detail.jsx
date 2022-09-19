import React, { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Modal } from "../../components/modal/Modal";
import { NavRail } from "../../components/navs/NavRail";
import useModal from "../../hooks/useModal";
import { eventService } from "../../services/API/eventService";
import { participationService } from "../../services/API/participationService";
import { Page } from "../../styles/styles.styled";
import { VDetail } from "../../views/VDetail";

export const Detail = () => {
    const [event, setEvent] = useState();
    const [participations, setParticipations] = useState();
    const { modalIsActive, modalIsAsking, message, setModalIsActive, runModal } = useModal();


    const id = useParams().id;

    useEffect(() => {
        if (!id) return;
        getEvent();
    }, [id]);

    const getEvent = () => {
        eventService.getEvent(id).then(res => {
            if (!res) return;
            setEvent(res);
            getParticipations(id);
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
            {modalIsActive && <Modal message={message} modalIsAsking={modalIsAsking} setModalIsActive={setModalIsActive}/>}
            <NavRail />
            {event && <VDetail event={event} participations={participations} join={join} unjoin={unjoin} />}
            <Footer />
        </Page>
    )
}