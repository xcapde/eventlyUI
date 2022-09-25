import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "../../styles/styles.styled";
import { Pulse, UploadButton } from "../buttons/buttons.styled";
import { Input } from "./form.styled"

export const ImageInput = ({ uploadImg, uploaded, error }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [styles, setStyles] = useState();
    const loadingStyle = { height: '50px', width: '50px', borderRadius: '50%'};
    const defaultStyle = { height: '4vh', width: '85px', borderRadius: 'var(--button-radius)' };
    const s = 5;
    const ms = s * 1000;
    const hiddenInput = React.useRef(null);
    const uploadBtn = React.useRef(null);

    useEffect(() => {
        if (!uploaded) return;
        if (uploaded) {
            setTimeout(() => {
                setIsLoading(false)
                setStyles(defaultStyle)
            }, ms * .35)
            return;
        }
        // eslint-disable-next-line
    }, [uploaded])

    useEffect(() => {
        if (!error) return;
        setTimeout(() => {
            setIsLoading(false)
            setStyles(defaultStyle);
        }, ms * .35)
        // eslint-disable-next-line
    }, [error])

    useEffect(()=>{
        if(!isLoading)return;
        setStyles(loadingStyle);
        // eslint-disable-next-line
    },[isLoading])

    const handleFileChange = (e) => {
        e.preventDefault();
        uploadImg(e.target.files[0]);
        setIsLoading(true);
    }

    const clickHiddenInput = (e) => {
        e.preventDefault();
        hiddenInput.current.click();
        setIsLoading(false);
    };

    console.log(error)
    return (
        <>
            <Col>
                <Pulse border={isLoading ? '2px solid var(--color-main)' : 'none'}>
                    <UploadButton
                        ref={uploadBtn}
                        onClick={clickHiddenInput}
                        style={styles}
                    >
                        {uploaded && isLoading ? <i className="fa-solid fa-check"></i> : isLoading ? "" : "Upload"}
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