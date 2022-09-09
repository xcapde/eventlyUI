import React, { useEffect, useState } from "react"
import { Col } from "../../styles/styles.styled";
import { Logo } from "../logo/Logo";
import { contents } from "./contents"
import { Aside, Wrapper } from "./navrail.styled";
import { NavRailItem } from "./NavRailItem";
import WhiteColor from "../../assets/logo/LogoWhiteSimple.png";

export const NavRail = () => {
    const [key, setKey] = useState(null);
    const [top, setTop] = useState(0);
    const [subcontent, setSubcontent] = useState(null);

    useEffect(() => {
        if (!key || !contents.desktop.main[key].subcontent) {
            setSubcontent(null);
            return;
        }
        setSubcontent(contents.desktop.main[key].subcontent);
        setTimeout(() => {
            setKey(null);
            setSubcontent(null);
        }, 20 * 1000);
    }, [key, subcontent, top])

    const openSubContent = (e, contKey) => {
        setTop(e.target.offsetTop);
        setKey(contKey);
    }

    return (
        <React.Fragment>
            <Wrapper width={subcontent && '15%'}>
                <Col>
                    <Logo scale={'50%'} imgUrl={WhiteColor} />
                </Col>
                <Col>
                    {Object.keys(contents.desktop.main).map((c, key) => <NavRailItem content={contents.desktop.main[c]} key={key} sub={subcontent !== null} callback={(e) => openSubContent(e, c)} />)}
                </Col>
                <br />
                <Col>
                    {Object.keys(contents.desktop.sec).map((c, key) => <NavRailItem content={contents.desktop.sec[c]} key={key} sub={subcontent !== null} />)}
                </Col>
                <Col style={{ height: '25%', width: '75%', borderTop: '1px groove white' }}>
                    <span style={{ color: 'white' }}>profile</span>
                </Col>
            </Wrapper>

            {subcontent &&
                <Aside top={`${top}px`}>
                    {Object.keys(subcontent).map((s, key) => <NavRailItem content={subcontent[s]} key={key} sub={subcontent !== null} />)}
                </Aside>}
        </React.Fragment>
    )
}