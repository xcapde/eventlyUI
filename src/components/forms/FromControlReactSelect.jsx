import { useState } from 'react';
import Select from 'react-select';
import { CreatableLabel, FormCntrl } from "./form.styled";
import format from "../../utils/format";
import { useEffect } from 'react';
import { customStyles } from '../../styles/reactSelect';

export const FormControlReactSelect = ({ data, field, options, callback }) => {

    const [values, setValues] = useState();
    const [display, setDisplay] = useState();
    const style = {
        top: '-40px',
        left: '2.5 %',
        color: 'var(--color-main)'
    }

    useEffect(() => {
        setValues(format.optionsToReactSelectOptions(options));
    }, [options]);

    useEffect(() => {
        moveLabel();
        // eslint-disable-next-line
    }, [data])

    const handleChange = (newValue) => {
        callback({ ...data, [field]: format.reactSelectOptionToOption(newValue) })
    }


    const moveLabel = () => {
        data[field] === "" ? setDisplay() : setDisplay(style);
    }

    return (
        <FormCntrl>
            <Select
                options={values}
                defaultValue={""}
                value={data[field] ? { value: data[field], label: data[field] } : ""}
                placeholder={""}
                styles={customStyles}
                onChange={handleChange}
                onFocus={() => setDisplay(style)}
                onBlur={() => moveLabel()}
            />
            <CreatableLabel style={display}>{field}</CreatableLabel>
        </FormCntrl>
    )
}