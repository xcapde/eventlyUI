import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import { useEffect, useState } from "react";
import { tagService } from "../../services/API/tagService";
import { Row, Col } from "../../styles/styles.styled";
import { Form, OutputCnt } from "./form.styled";
import { AddButton } from "../buttons/AddButton";
import format from "../../utils/format";
import { Badge } from '../badges/Badge';

export const TagsForm = ({ event, addTags, deleteTags }) => {

    const [tags, setTags] = useState();
    const [newTags, setNewTags] = useState();

    useEffect(() => {
        getAll();
    }, [])

    const getAll = () => {
        tagService.getAll().then(res => {
            if (!res) return;
            setTags(format.tagsToOptions(res));
        })
    }


    const handleChange = (newValue) => {
        setNewTags(format.optionsToTags(newValue))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTags);
        addTags(newTags);
        setNewTags();
    }

    return (
        <Col>
            <Form onSubmit={handleSubmit}>
                {tags &&
                    <CreatableSelect styles={{ width: 'var(--input-width)' }} options={tags} isMulti onChange={handleChange} />
                }
                <AddButton style={{left: '40%'}}/>
            </Form>
            <OutputCnt>
                {event && event.tags.length > 0 ?
                    event.tags.map((tag, key) => (<Badge content={tag} field={'tags'} callback={deleteTags} editMode={true} />))
                    : "No tags yet!"}
            </OutputCnt>
        </Col>
    );
}