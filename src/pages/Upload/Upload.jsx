import { eventService } from "../../services/API/eventService";
import { Page, View } from "../../styles/styles.styled";
import { NavRail } from "../../components/navs/NavRail";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { MultiStepForm } from "../../views/upload/MultiStepForm";
import { directionService } from "../../services/API/directionService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { imageService } from "../../services/API/imageService";
import { requirementService } from "../../services/API/requirementService";
import { tagService } from "../../services/API/tagService";
import { Modal } from "../../components/modal/Modal";
import useModal from "../../hooks/useModal";
import { webUrlService } from "../../services/API/webUrlService";

export const Upload = () => {

    const [event, setEvent] = useState();
    const [direction, setDirection] = useState();
    const [url, setUrl] = useState();
    const { eventId } = useParams();
    const [error, setError] = useState();
    const { modalIsActive, modalIsAlert, message, setModalIsActive, runModal, runAlertModal } = useModal();


    useEffect(() => {
        if (!eventId) return;
        getEvent(eventId);
        // eslint-disable-next-line
    }, [eventId])

    useEffect(() => { }, [event])

    const getEvent = (id) => {
        eventService.getEvent(id).then(res => {
            setEvent(res);
            // setError();
            if (res.location === "") return;
            res.type === "offline" ? getDirection(id) : getWebUrl(id);
        })
    }

    const postEvent = (data) => {
        setError();
        eventService.postEvent(data).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            runModal(`${res.title} has been created!`)
            getEvent(res.id);
            setError();
        })
    }

    const updateEvent = (data) => {
        setError();
        eventService.updateEvent({ ...data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error);
                runAlertModal(res.error);
                getEvent(event.id);
                return;
            }
            runModal(`${res.title} has been updated!`)
            if (event.type !== res.type) {
                setDirection("");
                setUrl("");
            }
            getEvent(res.id);
        })
    }

    const addDirection = (data) => {
        setError();
        directionService.createDirection({ ...data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error);
                runAlertModal(res.error);
                getEvent(event.id);
                return;
            }
            getEvent(event.id);
            getDirection(event.id);
            setError();
        })
    }

    const getDirection = (id) => {
        directionService.getByEventId(id).then(res => {
            delete res.id;
            setDirection(res);
            setError();
        })
    }

    const addWebUrl = (data) => {
        setError();
        webUrlService.createWebUrl({ ...data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            getEvent(event.id);
            getWebUrl(event.id);
            setError();
        })
    }

    const getWebUrl = (id) => {
        webUrlService.getByEventId(id).then(res => {
            delete res.id;
            setUrl(res);
            setError();
        })
    }

    const uploadImg = (data) => {
        imageService.postImg(data, event.id).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                setTimeout(() => {
                    setError();
                }, 3000);
                return;
            }
            runModal(res.message);
            getEvent(event.id);
        })
    }

    const deleteImg = (data) => {
        imageService.deleteByUrl(data).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            runModal(res.message);
            getEvent(event.id);
        })
    }

    const addReq = (data) => {
        requirementService.createRequirement({ name: data.requirement, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            getEvent(event.id);
        })
    }

    const deleteReq = (data) => {
        requirementService.deleteRequirement({ name: data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            getEvent(event.id);
        })
    }

    const addTags = (data) => {
        tagService.addTagsToEvent({ data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            getEvent(event.id);
        })
    }

    const deleteTags = (data) => {
        tagService.deleteEventTag({ name: data, id: event.id }).then(res => {
            if (res.error) {
                setError(res.error)
                runAlertModal(res.error)
                return;
            }
            getEvent(event.id);
        })
    }

    console.log(error)
    return (
        <Page>
            <NavRail />
            {modalIsActive && <Modal message={message} modalIsAlert={modalIsAlert} setModalIsActive={setModalIsActive} />}
            <View>
                <MultiStepForm
                    event={event}
                    postEvent={postEvent}
                    updateEvent={updateEvent}
                    addDirection={addDirection}
                    eventDirection={direction}
                    addWebUrl={addWebUrl}
                    eventUrl={url}
                    uploadImg={uploadImg}
                    deleteImg={deleteImg}
                    addReq={addReq}
                    deleteReq={deleteReq}
                    addTags={addTags}
                    deleteTags={deleteTags}
                    error={error}
                />
            </View>
            <Footer />
        </Page>

    )
}