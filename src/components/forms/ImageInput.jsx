import React from "react";
import { UploadButton } from "../buttons/buttons.styled";
import { Input } from "./form.styled"

export const ImageInput = ({uploadImg}) => {

    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        return;
        uploadImg({ file: e.target.files[0] })
    }

    const hiddenInput = React.useRef(null);

    const clickHiddenInput = (e) => {
        e.preventDefault();
        hiddenInput.current.click();
    };

    return (
        <>
            <UploadButton onClick={clickHiddenInput} />
            <Input
                id="upload"
                type={'file'}
                display={'none'}
                ref={hiddenInput}
                onChange={handleFileChange}
                required
            />
        </>

    )
}