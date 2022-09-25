import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../../components/buttons";
import { ImageForm, LocationForm, ReqsForm, TagsForm } from "../../components/forms";
import { EventForm } from "../../components/forms/EventForm";
import { Title } from "../../styles/styles.styled";
import { DesktopWrapper, Footer, Header, Main, Progress, ProgressBar } from "./multistepform.styled";

export const MultiStepForm = ({
    event, postEvent, updateEvent,
    addDirection, addWebUrl,
    eventDirection, eventUrl,
    uploadImg, deleteImg,
    addReq, deleteReq,
    addTags, deleteTags,
    error }) => {


    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [errIndex, setErrIndex] = useState(-1);
    const navigate = useNavigate();

    const hasDetails = () => {
        if (!event) return;
        return event.tags.length > 0 || event.requirements.length > 0 || event.images.length > 0;
    }

    const errorHandler = () => {
        let err = error.toLowerCase().split(" ");
        err.map((w, k) => {
            forms.filter((f, fk) => {
                if (f.keyWords.includes(w)) {
                    setErrIndex(+fk);
                }
            })
        })
    }

    const forms = [
        {
            title: `${event ? "Update" : "Upload"} your event!`,
            view: <EventForm postEvent={postEvent} updateEvent={updateEvent} eventToUpdate={event} next={() => setPage(page + 1)} />,
            keyWords: ["title", "description", "type", "date"]
        },
        {
            title: `${event && !event.location ? 'Add' : 'Update'} a location!`,
            view: <LocationForm event={event} addDirection={addDirection} eventDirection={eventDirection} eventUrl={eventUrl} addWebUrl={addWebUrl} next={() => setPage(page + 1)} />,
            keyWords: ["location", "direction", "url", "country", "province", "city", "street", "builing", "door"]
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} event requirements'!`,
            view: <ReqsForm event={event}
                addReq={addReq}
                deleteReq={deleteReq} />,
            keyWords: ["requirement"]
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} tags!`,
            view: <TagsForm event={event}
                addTags={addTags}
                deleteTags={deleteTags} />,
            keyWords: ["tag", "tags"]
        },
        {
            title: `${hasDetails() ? "Update" : "Add"} event pictures'!`,
            view: <ImageForm event={event}
                uploadImg={uploadImg}
                deleteImg={deleteImg}
                error={error} />,
            keyWords: ["image"]
        }
    ]

    useEffect(() => {
        setProgress((page + 1) / (forms.length) * 100)
    }, [page, forms.length])

    useEffect(() => {
        if (!error){
            setErrIndex(-1);
            return;
        }
        errorHandler();
    }, [error])

    useEffect(() => {
        if (errIndex == -1) return;
        if (errIndex === page) return;
        setTimeout(setPage(errIndex), 3000);
        setErrIndex(-1);
    }, [errIndex, page])

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
                <LinkButton
                    disabled={page === 0 || !event} content={'back'}
                    callback={() => setPage(page - 1)} />
                <LinkButton
                    disabled={!event || error || (page === 1 && event.location === "")}
                    content={page <= 1 ? 'next' : page === forms.length - 1 ? 'done' : 'skip'}
                    callback={page === forms.length - 1 ? () => navigate(`/events/${event.id}`) : !error ? () => setPage(page + 1) : () => setPage(page)} />
            </Footer>
        </DesktopWrapper>
    )
}