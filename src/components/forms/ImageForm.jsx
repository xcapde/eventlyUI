import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Col } from "../../styles/styles.styled"
import { ImagePreview } from "../images/ImagePreview"
import { NoPreviewSmall } from "../images/images.styled"
import { OutputCnt } from "./form.styled"
import { ImageInput } from "./ImageInput"

export const ImageForm = ({ event, uploadImg, deleteImg, error }) => {

    const s = 3;
    const ms = s * 1000;
    const [images, setImages] = useState(0);
    const [preview, setPreview] = useState();
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        setImages(event && event.images ? event.images : images);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!event) return;
        setUploaded(isUploaded());
        setTimeout(() => {
            setUploaded(false);
        }, ms);
        // eslint-disable-next-line
    }, [event, error])


    const isUploaded = () => {
        if (images === 0) return;
        if (error) {
            setUploaded(false);
            return;
        }
        return event.images.map((num, key) => event.images[key] === images[key]).includes(false);
    }

    console.log(preview)
    return (
        <Col>
            <Col>
                <OutputCnt grid={'auto auto'} style={event.images.length === 0 ? {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                } : {}}>
                    {event && event.images.length > 0 ?
                        event.images.map((image, key) => (
                            <ImagePreview key={key} url={image} callback={deleteImg} />
                        )) :
                        !preview && <NoPreviewSmall />
                    }
                    {preview && <ImagePreview url={preview} />}
                </OutputCnt>
            </Col>
            <Col>
                <ImageInput uploadImg={uploadImg} uploaded={uploaded} error={error} setPreview={setPreview} />
            </Col>
        </Col>
    )
}