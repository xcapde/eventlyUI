import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { FooterItem, FooterItemsCnt, Wrapper } from "./footer.styled";

export const Footer = () => {
    const location = useLocation().pathname.substring(1, useLocation().pathname.length);
    const navigate = useNavigate();

    const content = {
        home: { icon: <i className="fa-solid fa-house"></i>, link: "/home" },
        search: { icon: <i className="fa-solid fa-magnifying-glass"></i>, link: "/search" },
        upload: { icon: <i className="fa-regular fa-square-plus"></i>, link: "/upload" },
        notification: { icon: <i className="fa-solid fa-shuffle"></i>, link: "/notifications" },
        profile: { icon: <Avatar imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'} />, link: "/profile" }
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

//<i className={location === 'home' ? "fa-solid fa-house" : "fa-solid fa-house activatedTab"}></i>