import { useEffect } from "react"
import { useState } from "react"
import { Col, Row } from "../../styles/styles.styled"
import { ImagePreview } from "../images/ImagePreview"
import { NoPreviewSmall } from "../images/images.styled"
import { OutputCnt } from "./form.styled"
import { ImageInput } from "./ImageInput"

export const ImageForm = ({ event, uploadImg, deleteImg }) => {

    const [images, setImages] = useState(0);
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        setImages(event && event.images ? event.images : images);
    }, [])

    useEffect(() => {
        const s = 3;
        const ms = s * 1000;
        if (!event) return;
        if (event.images === images) return;
        setUploaded(true);
        setTimeout(() => {
            setUploaded(false);
        }, ms);
    }, [event])

    return (
        <Col>
            <Col>
                <OutputCnt style={event.images.length === 0 ? {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center'
                } : {}}>
                    {event && event.images.length > 0 ?
                        event.images.map((image, key) => (
                            <ImagePreview key={key} url={image} callback={deleteImg} />
                        )) :
                        <NoPreviewSmall />
                    }
                </OutputCnt>
            </Col>
            <Col>
                <ImageInput uploadImg={uploadImg} uploaded={uploaded} />
            </Col>
        </Col>
    )
}