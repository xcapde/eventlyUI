import React, { useEffect, useState } from "react";
import { contents } from "./contents";
import { Aside, Logo, ToggleBtn, Wrapper } from "./navrail.styled";
import logo from "../../assets/logo/LogoWhiteSimple.png";
import { NavSection } from "./NavSection";
import { useNavigate } from "react-router-dom";

export const NavRail = () => {
    const [opened, setOpened] = useState(false);
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState();
    const [subcontent, setSubcontent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        close();
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        if(opened)return;
        setSubcontent();
    },[opened])

    const openSubContent = (e, section, field) => {
        setSubcontent(contents[section][field].subcontent);
        setTop(section.includes("profile") ? null : e.target.offsetTop + 'px');
        setBottom(section.includes("profile") ? '1%' : null);
    }

    const callback = (e, sec, field, link) => {
        !link ? openSubContent(e, sec, field) : navigate(link);
    }

    const close = () => {
        window.addEventListener("click", (e) => {
            if (e.clientX <= 145) return;
            if (subcontent) return;
            setOpened(false);
        })
    }

    return (
        <React.Fragment>
            <Wrapper id="navrail" width={opened && '12rem'} column={opened && '2/3'}>
                <ToggleBtn onClick={() => setOpened(!opened)} />
                <Logo imgUrl={logo} />
                <NavSection content={contents.main} opened={opened} section={'main'} callback={callback} />
                <NavSection content={contents.sec} opened={opened} section={'sec'} callback={callback} />
                <NavSection content={contents.profile} opened={opened} section={'profile'} callback={callback} />
            </Wrapper>

            {subcontent && opened &&
                <Aside top={top} bottom={bottom}>
                    <NavSection content={subcontent} opened={opened} callback={callback} />
                </Aside>}


        </React.Fragment>
    )
}