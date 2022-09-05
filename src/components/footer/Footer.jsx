import { AvatarImg } from "../../styles/styles.styled"
import { Tab, Wrapper } from "./footer.styled"

export const Footer = () => {
    return (
        <Wrapper>
            <Tab>
                <i className="fa-solid fa-house"></i>
            </Tab>
            <Tab>
                <i className="fa-solid fa-magnifying-glass"></i>
            </Tab>
            <Tab>
                <i className="gg-add-r"></i>
            </Tab>
            <Tab>
                <i className="fa-solid fa-shuffle"></i>
            </Tab>
            <Tab>
                <AvatarImg imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'}/>
            </Tab>
        </Wrapper>
    )
}