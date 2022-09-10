import { useEffect } from "react";
import { useState } from "react";
import { LinkButton } from "../../components/buttons";
import { LocationForm } from "../../components/forms";
import { EventForm } from "../../components/forms/EventForm";
import { PlusForm } from "../../components/forms/PlusForm";
import { Title, Wrapper } from "../../styles/styles.styled";
import { Footer, Header, Main, Progress, ProgressBar } from "./multistepform.styled";

export const MultiStepForm = ({ event, postEvent, updateEvent, addDirection, addWebUrl }) => {

    const forms = [
        {
            title: `${event ? "Update" : "Upload"} your event!`,
            view: <EventForm postEvent={postEvent} updateEvent={updateEvent} eventToUpdate={event} />
        },
        {
            title: `${event && !event.location ? 'Add' : 'Update'} a location!`,
            view: <LocationForm event={event} addDirection={addDirection} addWebUrl={addWebUrl} />
        },
        {
            title: `${event ? "Update" : "Upload"} details!`,
            view: <PlusForm event={event} />
        },
    ]

    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress((page + 1) / 3 * 100)
    }, [page])

    console.log("event: ", event)
    return (
        <Wrapper>
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
                    disabled={!event || page === forms.lenght - 1
                        || (page === 1 && event.location === "")}
                    content={page !== forms.length - 1 ? 'next' : 'skip'}
                    callback={() => setPage(page + 1)} />
            </Footer>
        </Wrapper>
    )
}