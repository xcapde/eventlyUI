import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { useEffect, useState } from "react";
import { tagService } from "../../services/API/tagService";
import { Col } from "../../styles/styles.styled";
import { Form, OutputCnt } from "./form.styled";
import { AddButton } from "../buttons/AddButton";
import format from "../../utils/format";
import { Badge } from '../badges/Badge';
import { customStyles } from '../../styles/reactSelect';

export const TagsForm = ({ event, addTags, deleteTags }) => {


    const [tags, setTags] = useState();
    const [newTags, setNewTags] = useState();
    const select = React.useRef(null);

    useEffect(() => {
        getAll();
    }, [])

    const getAll = () => {
        tagService.getAll().then(res => {
            if (!res) return;
            setTags(format.tagsToOptions(res));
        })
    }


    const handleChange = (newValue, actionMeta) => {
        setNewTags(format.optionsToTags(newValue));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTags(newTags);
        setNewTags();
        select.current.clearValue();
    }

    return (
        <Col>
            <Form onSubmit={handleSubmit}>
                {tags &&
                    <CreatableSelect
                        styles={customStyles}
                        options={tags}
                        isMulti
                        onChange={handleChange}
                        placeholder={''}
                        ref={select}
                    />
                }
                <AddButton style={{ left: '40%' }} />
            </Form>
            <OutputCnt>
                {event && event.tags.length > 0 ?
                    event.tags.map((tag, key) => (<Badge key={key} content={tag} field={'tags'} callback={deleteTags} editMode={true} />))
                    : "No tags yet!"}
            </OutputCnt>
        </Col>
    );
}