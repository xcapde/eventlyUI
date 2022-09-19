import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { Avatar } from "../avatar/Avatar";
import { FooterItem, FooterItemsCnt, Wrapper } from "./footer.styled";

export const Footer = () => {
    const location = useLocation().pathname.substring(1, useLocation().pathname.length);
    const navigate = useNavigate();
    const [img, setImg] = useState();

    useEffect(() => {
        const images = {
            afonttorres: "https://images2.alphacoders.com/521/521982.jpg",
            xcapde: "https://st2.depositphotos.com/1006318/5909/v/380/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg?forcejpeg=true",
            joelblasi: "https://www.latercera.com/resizer/Xgv_N0k0jHkA4j0uMiMAVcYDk7M=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/6VQJVKQNHVEKRNEAPHY7BSLBMA.jpg",
            lauraparra: "https://i.pinimg.com/originals/88/37/4b/88374ba5e11828dbdfc0a504b964c086.jpg",
            default: "https://i.pinimg.com/474x/b7/cf/46/b7cf46c96e503fdec995645e70d95705.jpg"
        }

        let auth = AuthService.getAuthUser().username;
        let key = (!auth || !Object.keys(images).includes(auth)) ? 'default' : auth;
        setImg(images[key]);
    }, [])

    const content = {
        home: { icon: <i className="fa-solid fa-house"></i>, link: "/home" },
        search: { icon: <i className="fa-solid fa-magnifying-glass"></i>, link: "/search" },
        upload: { icon: <i className="fa-regular fa-square-plus"></i>, link: "/upload" },
        notification: { icon: <i className="fa-solid fa-bell"></i>, link: "/notifications" },
        profile: { icon: <Avatar imgUrl={img} scale='0.6' />, link: "/profile" }
    }

    return (
        <Wrapper>
            <FooterItemsCnt>
                {Object.keys(content).map((item, key) => (
                    <FooterItem color={location.includes(item) ? 'var(--color-main)' : ''} onClick={() => navigate(content[item].link)} key={key} >{content[item].icon}</FooterItem>
                ))}
            </FooterItemsCnt>
        </Wrapper>
    )
}