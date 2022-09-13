import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { useEffect, useState } from "react";
import { tagService } from "../../services/API/tagService";
import { Col } from "../../styles/styles.styled";
import { CreatableLabel, Form, FormCntrl, OutputCnt } from "./form.styled";
import { AddButton } from "../buttons/AddButton";
import format from "../../utils/format";
import { Badge } from '../badges/Badge';
import { customStyles } from '../../styles/reactCreatable';

export const TagsForm = ({ event, addTags, deleteTags }) => {


    const [tags, setTags] = useState();
    const [newTags, setNewTags] = useState([]);
    const [display, setDisplay] = useState();
    const select = React.useRef(null);
    const style = {
        top: '-40px',
        left: '2.5 %',
        color: 'var(--color-main)'
    }

    useEffect(() => {
        getAll();
    }, [])

    useEffect(() => {
        moveLabel();
    }, [newTags])

    const getAll = () => {
        tagService.getAll().then(res => {
            if (!res) return;
            setTags(format.tagsToOptions(res));
        })
    }


    const handleChange = (newValue) => {
        setNewTags(format.optionsToTags(newValue));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTags(newTags);
        setNewTags();
        select.current.clearValue();
        setDisplay();
    }

    const moveLabel = () => {
        newTags.length === 0 ? setDisplay() : setDisplay(style);
    }

    return (
        <Col>
            <Col>
                <OutputCnt>
                    {event && event.tags.length > 0 ?
                        event.tags.map((tag, key) => (<Badge key={key} content={tag} field={'tags'} callback={deleteTags} editMode={true} />))
                        : "No tags yet!"}
                </OutputCnt>
            </Col>
            <Col>
                <Form onSubmit={handleSubmit}>
                    {/* {tags && */}
                    <FormCntrl>
                        <CreatableSelect
                            styles={customStyles}
                            options={tags}
                            isMulti
                            onChange={handleChange}
                            placeholder={''}
                            ref={select}
                            onFocus={() => setDisplay(style)}
                            onBlur={() => moveLabel()}
                        />
                        <CreatableLabel style={display}>Tags</CreatableLabel>
                    </FormCntrl>
                    {/* } */}
                    <AddButton />
                </Form>
            </Col>

        </Col>
    );
}