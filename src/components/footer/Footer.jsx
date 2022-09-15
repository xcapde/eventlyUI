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
            xcapde: "https://img.ecartelera.com/noticias/fotos/52100/52153/1.jpg",
            joelblasi: "https://img.ecartelera.com/noticias/fotos/52100/52153/1.jpg",
            lauraparra: "https://images2.alphacoders.com/521/521982.jpg",
            default: "https://i.pinimg.com/474x/b7/cf/46/b7cf46c96e503fdec995645e70d95705.jpg"
        }

        let username = AuthService.getAuthUser().username;
        setImg(images[username ? username : 'default']);
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