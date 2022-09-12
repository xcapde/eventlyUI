import { useEffect, useState } from "react";
import { Col, DetailText, Row } from "../../styles/styles.styled"
import { AddButton } from "../buttons";
import {ReqFeed} from "../feeds/ReqFeed";
import { OutputCnt, SmallForm } from "./form.styled"
import { FormControlInput } from "./FormControlInput"

export const ReqsForm = ({ event, addReq, deleteReq }) => {

    useEffect(() => {
        if (event.requirements <= 0) return;
    }, [event])

    const [requirement, setRequirement] = useState({ requirement: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        addReq(requirement);
        setRequirement({ requirement: "" });
    }

    return (
        <Row>
            <Col style={{ width: '60%' }}>
                {event && event.requirements.length > 0 ?
                    <ReqFeed requirements={event.requirements} deleteReq={deleteReq} /> :
                    <DetailText>No requirements yet!</DetailText>
                }
            </Col>
            <Col style={{ width: '40%', justifyContent: 'flex-start' }}>
                <SmallForm style={{padding:'2%'}} onSubmit={handleSubmit}>
                    <FormControlInput field={'requirement'} data={requirement} callback={setRequirement} />
                    <AddButton />
                </SmallForm>
            </Col>
        </Row>
    )
}