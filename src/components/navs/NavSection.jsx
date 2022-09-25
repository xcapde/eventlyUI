import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { NavIcon, NavCont, NavRow, Section } from "./navrail.styled";
import { AuthService } from "../../services/AuthService";

export const NavSection = ({ opened, content, section, callback }) => {

    const [publisher, setPublisher] = useState();

    useEffect(() => {
        setPublisher(AuthService.getAuthUser() ? AuthService.getAuthUser() : 'default');
    }, [])

    return (
        <Section columns={opened ? 'repeat(7, 1fr)' : ''} flow={opened ? 'row' : ''}>
            {Object.keys(content).map((field, key) => (
                <NavRow row={field === "profile" ? "3/7 !important" : null}
                    onClick={(e) => callback(e, section, field, content[field].link, content[field].callback)}
                    style={!opened ? { pointerEvents: 'none' } : { pointerEvents: 'all' }} key={key}>
                    {!field.includes("profile") ?
                        <NavIcon column={opened ? '1/2' : ''}>{content[field].icon}</NavIcon> :
                        <Avatar left={!opened ? '1rem' : ''} publisher={publisher} />
                    }
                    <NavCont display={opened ? 'block' : ''} 
                    color={opened ? 'white' : ''} 
                    row={field.includes("profile") ? '2/3' : '1/1'} 
                    col={field.includes("profile") ? ' 1/8' : ' 3/8'}
                    paddingTop={field.includes("profile") ? '.5rem' : 'none'}
                    >
                        {publisher && field.includes("profile") && publisher.username ?
                            publisher.username
                            : content[field].content}
                    </NavCont>
                </NavRow>))}
        </Section>
    )
}