import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BadgeCnt } from "./badge.syled";

export const Badge = ({ content, callback, field, editMode }) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();

    const action = (content) => {
        if(location.includes('events') && field !== 'requirements'){
                navigate({
                pathname: `/events`,
                search: `?tag=${content}`,
                })
            }
            callback(content.toLowerCase())
    }

    return (
        <BadgeCnt onClick={()=>action(content)} backgroundColor={field === 'requirements'?'var(--color-badgetBG-requirement)' : ''} color={field === 'requirements'? 'var(--color-badgetText-requirement)' : ''}>
            
            {content}

            {editMode && <i className="fa-solid fa-xmark" onClick={()=>callback(content.toLowerCase())}  ></i>}
        </BadgeCnt>
    );
} 