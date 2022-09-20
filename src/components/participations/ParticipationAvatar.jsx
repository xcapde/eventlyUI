import { useEffect, useState } from "react";
import { PartAvatar } from "../images/images.styled"

export const ParticipationAvatar = ({ participation, left }) => {

    const [img, setImg] = useState();

    useEffect(() => {
        const images = {
            afonttorres: "https://images2.alphacoders.com/521/521982.jpg",
            xcapde: "https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1706/yupiramos170620239.jpg",
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