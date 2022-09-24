import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../../components/buttons";
import { ImageForm, LocationForm, ReqsForm, TagsForm } from "../../components/forms";
import { EventForm } from "../../components/forms/EventForm";
// import { PlusForm } from "../../components/forms/PlusForm";
import { Title } from "../../styles/styles.styled";
import { DesktopWrapper, Footer, Header, Main, Progress, ProgressBar } from "./multistepform.styled";

export const MultiStepForm = ({
    event, postEvent, updateEvent,
    addDirection, addWebUrl, 
    eventDirection, eventUrl,
    uploadImg, deleteImg,
    addReq, deleteReq,
    addTags, deleteTags }) => {

    const hasDetails = () => {
        if (!event) return;
        return event.tags.length > 0 || event.requirements.length > 0 || event.images.length > 0;
    }

    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    const forms = [
        {
            title: `${event ? "Update" : "Upload"} your event!`,
            view: <EventForm postEvent={postEvent} updateEvent={updateEvent} eventToUpdate={event} next={() => setPage(page + 1)} />
        },
        {
            title: `${event && !event.location ? 'Add' : 'Update'} a location!`,
            view: <LocationForm event={event} addDirection={addDirection} eventDirection={eventDirection} eventUrl={eventUrl} addWebUrl={addWebUrl} next={() => setPage(page + 1)} />
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} event requirements'!`,
            view: <ReqsForm event={event}
                addReq={addReq}
                deleteReq={deleteReq} />
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} tags!`,
            view: <TagsForm event={event}
                addTags={addTags}
                deleteTags={deleteTags} />
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} event pictures'!`,
            view: <ImageForm event={event}
                uploadImg={uploadImg}
                deleteImg={deleteImg} />
        },
    ]

    useEffect(() => {
        setProgress((page + 1) / (forms.length) * 100)
    // eslint-disable-next-line
    }, [page])

    return (
        <DesktopWrapper>
            <Header>
                <ProgressBar>
                    <Progress width={`${progress}%`} />
                </ProgressBar>
                <Title>{forms[page].title}</Title>
            </Header>
            <Main>
                {forms[page].view}
            </Main>
            <Footer>
                <LinkButton disabled={page === 0 || !event} content={'back'}
                    callback={() => setPage(page - 1)} />
                <LinkButton
                    disabled={!event || (page === 1 && event.location === "")}
                    content={page <= 1 ? 'next' : page === forms.length - 1 ? 'done' : 'skip'}
                    callback={ page === forms.length - 1 ? ()=> navigate(`/events/${event.id}`): () => setPage(page + 1)} />
            </Footer>
        </DesktopWrapper>
    )
}