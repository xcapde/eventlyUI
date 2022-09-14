import React, { useEffect } from "react";
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { NavRail } from "../../components/navs/NavRail";
import { eventService } from "../../services/API/eventService";
import { participationService } from "../../services/API/participationService";
import { Page } from "../../styles/styles.styled";
import { MobileDetail } from "../../views/MobileDetail";

export const Detail = () => {
    const location = useLocation();
    const [event, setEvent] = useState();
    const [participations, setParticipations] = useState();

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
            alert(res);
            getEvent(id);
        })
    }

    const unjoin = () => {
        participationService.unjoin(id).then(res => {
            if (!res) return;
            alert(res);
            getEvent(id);
        })
    }

    return (
        <Page>
            <NavRail />
            {event &&
                <React.Fragment>
                    <MobileDetail event={event} participations={participations} join={join} unjoin={unjoin} />
                    {/* <DesktopDetail /> */}
                </React.Fragment>
            }
            <noscript>event not found component?</noscript>
            <Footer />
        </Page>
    )
}