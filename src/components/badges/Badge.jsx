import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BadgeCnt } from "./badge.syled";

export const Badge = ({ content, callback, field, editMode }) => {
    const location = useLocation().pathname

    return (
        <BadgeCnt onClick={()=>callback(content.toLowerCase())} backgroundColor={field === 'requirements'?'var(--color-badgetBG-requirement)' : ''} color={field === 'requirements'? 'var(--color-badgetText-requirement)' : ''}>
            
            {/* {location.includes('events')?
                <Link to={`/search/${content}`}>
                    {content}
                </Link>
                :
                {content}
            } */}

            {content}

            {location.includes('events')&&
                <Link to={`/search/${content}`}>
                    {content}
                </Link>
            }


            {editMode && <i className="fa-solid fa-xmark" onClick={()=>callback(content.toLowerCase())}  ></i>}
        </BadgeCnt>
    );
} 