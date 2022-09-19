import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "../../styles/styles.styled";
import { Pulse, UploadButton } from "../buttons/buttons.styled";
import { Input } from "./form.styled"

export const ImageInput = ({ uploadImg, uploaded }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);
    const s = 5;
    const ms = s * 1000;
    const hiddenInput = React.useRef(null);
    const uploadBtn = React.useRef(null);

    useEffect(() => {
        if (uploaded) {
            setIsLoading(false);
        }
        if (!uploaded && file) {
            uploadBtn.current.focus();
            uploadBtn.current.blur();
            setFile(null);
        }
    }, [uploaded, file])


    useEffect(() => {
    }, [isLoading])

    const handleFileChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
        uploadImg(e.target.files[0]);
        setIsLoading(true);
    }

    const clickHiddenInput = (e) => {
        e.preventDefault();
        hiddenInput.current.click();
        setIsLoading(false);
        blurUploadBtn();
    };

    const blurUploadBtn = () => {
        uploadBtn.current.focus();
        setTimeout(() => {
            if (file === "") {
                uploadBtn.current.blur();
            }
        }, ms);
    }

    console.log(isLoading, uploaded)
    return (
        <>
            <Col>
                <Pulse border={isLoading ? '2px solid var(--color-main)' : 'none'}>
                    <UploadButton
                        borderRadius={!isLoading ? 'var(--button-radius)' : '50%'}
                        pointer={uploaded ? 'none' : 'all'}
                        ref={uploadBtn}
                        onClick={clickHiddenInput}>
                        {uploaded ? <i className="fa-solid fa-check"></i> : isLoading ? "" : "Upload"}
                    </UploadButton>
                </Pulse>

            </Col>

            <Input
                id="upload"
                type={'file'}
                display={'none'}
                ref={hiddenInput}
                onChange={handleFileChange}
            />
        </>

    )
}