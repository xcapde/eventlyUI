import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { BackButton } from "../../components/buttons/BackButton";
import { eventService } from "../../services/API/eventService";
import { PageHeader } from "../../styles/styles.styled";
import { DetailPage } from "./detail.styled";

export const DetailDesktop=()=>{
    const [eventInfo, setEventInfo] = useState({});
    const [id] = useParams().id;

    useEffect(()=>{
        if(!id) return;
        getEventInfo(id);

    },[id]);

    const getEventInfo=(id)=>{
        eventService.getEvent(id).then(res => {
            if(!res) return;
            setEventInfo(res);
        })
    }

    return(
        <DetailPage>
            <PageHeader>
                <Link to={"/"}>
                    <BackButton/>
                </Link>
            </PageHeader>

        </DetailPage>
    )
}