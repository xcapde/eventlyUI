import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { AuthService } from "../../../../../services/AuthService";
import { OptionButton } from "../../../OptionButton";
import { OptionsCnt } from "./options.styled";

export const Options = ({ event, remove, edit }) => {

    const [location, setLocation] = useState(useLocation().pathname.substring(1, useLocation().pathname.length));
    const [view, setView] = useState();
    const [client, setClient] = useState();

    useEffect(() => {
        if (!location) return;
        if (!location.includes("/")) return;
        setLocation(location.substring(0, location.lastIndexOf("/")));
    }, [location])

    useEffect(() => {
        if (!location) return;
        setView(location.includes("event") ? "detail" : location);
        setClient(!event ? AuthService.getAuthUser().token ? 'isAuth' : 'default' : AuthService.isPublisher(event) ? 'isAuth' : 'default');
    }, [location, event])

    const content = {
        detail: {
            isAuth: [
                { content: "Delete", callback: () => { remove() } },
                { content: "Edit", callback: () => { edit() } }
            ],
            default: [
                { content: "Report", callback: () => console.log("not implemented yet") },
                { content: "More", callback: () => console.log("not implemented yet") }
            ]
        },
        profile: {
            isAuth: [
                { content: "Log out", callback: () => AuthService.logOut(true) },
                { content: "Settings", callback: () => console.log("not implemented yet") }
            ],
            default: [
                { content: "Log out", callback: () => AuthService.logOut() },
                { content: "Settings", callback: () => console.log("not implemented yet") }
            ]
        }
    }

    return (
        <React.Fragment >
            <OptionsCnt>
                {view && client && content[view][client].map((button, key) => (
                    <OptionButton key={key} content={button.content} callback={button.callback} />
                ))}
            </OptionsCnt>
        </React.Fragment >
    )
}