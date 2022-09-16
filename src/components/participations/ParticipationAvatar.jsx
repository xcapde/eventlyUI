import { useEffect, useState } from "react";
import { PartAvatar } from "../images/images.styled"

export const ParticipationAvatar = ({ participation, left }) => {

    const [img, setImg] = useState();

    useEffect(() => {
        const images = {
            afonttorres: "https://images2.alphacoders.com/521/521982.jpg",
            xcapde: "data:image/png;base64,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",
            joelblasi: "https://www.latercera.com/resizer/Xgv_N0k0jHkA4j0uMiMAVcYDk7M=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/6VQJVKQNHVEKRNEAPHY7BSLBMA.jpg",
            lauraparra: "https://i.pinimg.com/originals/88/37/4b/88374ba5e11828dbdfc0a504b964c086.jpg",
            default: "https://i.pinimg.com/474x/b7/cf/46/b7cf46c96e503fdec995645e70d95705.jpg"
        }

        let username = Object.keys(images).includes(participation.participant.username) ?
            participation.participant.username
            : 'default';
        setImg(images[username]);
    }, [participation])

    return (
        <PartAvatar imgUrl={img} left={left} />
    )
}