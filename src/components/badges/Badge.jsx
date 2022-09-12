import { BadgeCnt } from "./badge.syled";

export const Badge = ({ content, callback, field, editMode }) => {
    return (
        <BadgeCnt backgroundColor={field === 'requirements'?'var(--color-badgetBG-requirement)' : ''} color={field === 'requirements'? 'var(--color-badgetText-requirement)' : ''}>
            {content}
            {editMode && <i className="fa-solid fa-xmark" onClick={()=>callback(content.toLowerCase())}  ></i>}
        </BadgeCnt>
    );
} 