import { AvatarImg } from "../../styles/styles.styled"
import { FooterTabButton } from "../buttons/buttons.styled"
import { Wrapper } from "./footer.styled"

export const Footer = () => {
    return (
        <Wrapper>
            <FooterTabButton>
                <i className="fa-solid fa-house"></i>
            </FooterTabButton>
            <FooterTabButton>
                <i className="fa-solid fa-magnifying-glass"></i>
            </FooterTabButton>
            <FooterTabButton>
                <i className="gg-add-r"></i>
            </FooterTabButton>
            <FooterTabButton>
                <i className="fa-solid fa-shuffle"></i>
            </FooterTabButton>
            <FooterTabButton>
                <AvatarImg imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'}/>
            </FooterTabButton>
        </Wrapper>
    )
}