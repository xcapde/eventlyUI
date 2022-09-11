import { useEffect } from "react"
import { useState } from "react"
import { Row } from "../../styles/styles.styled"
import { ImagePreview } from "../images/ImagePreview"
import { NoPreviewSmall } from "../images/images.styled"
import { Input, OutputCnt } from "./form.styled"
import { ImageInput } from "./ImageInput"

export const ImageForm = ({ event, uploadImg, deleteImg }) => {

    const [imagesLength, setImagesLength] = useState(0);
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        setImagesLength(event && event.images ? event.images.length : imagesLength);
    }, [])

    useEffect(() => {
        const s = 3;
        const ms = s * 1000;
        if (!event) return;
        if (event.images.length === imagesLength) return;
        setUploaded(true);
        setTimeout(() => {
            setUploaded(false);
        }, ms);
    }, [event])

    const mockImages = [
        "https://images.unsplash.com/photo-1620633437938-be73c35eb77e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1470049384172-927891aad5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1539215398023-f3ac3405795f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1630238083594-43d3846190d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    ]



    return (
        <Row style={{ border: '1px solid black', gap: '5%' }}>
            <OutputCnt>
                {event && event.images.length > 0 ?
                    event.images.map((image, key) => (
                        <ImagePreview key={key} url={image} callback={deleteImg} />
                    )) :
                    <NoPreviewSmall />
                }
                {/* {mockImages.map((image, key) => (
                    <ImagePreview key={key} url={image} callback={(data) => console.error(`url to delete: ${data}`)} />
                ))} */}
            </OutputCnt>
            <ImageInput uploadImg={uploadImg} uploaded={uploaded} />
        </Row>
    )
}