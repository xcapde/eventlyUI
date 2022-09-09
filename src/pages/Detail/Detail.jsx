import React, { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { NavRail } from "../../components/navs/NavRail";
import { eventService } from "../../services/API/eventService";
import { Page } from "../../styles/styles.styled";
import { MobileDetail } from "../../views/MobileDetail";

export const Detail = () => {
    const [event, setEvent] = useState();
    const id = useParams().id;

    useEffect(() => {
        if (!id) return;
        getEvent(id);
    }, [id]);

    const getEvent = (id) => {
        eventService.getEvent(id).then(res => {
            if (!res) return;
            setEvent(res);
        })
    }
    return (
        <Page>
            <NavRail />
            {event &&
                <React.Fragment>
                    <MobileDetail event={event} />
                    {/* <DesktopDetail /> */}
                </React.Fragment>
            }
            <noscript>event not found component?</noscript>
            <Footer />
        </Page>
    )
}