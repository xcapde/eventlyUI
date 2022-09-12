import { BadgeCnt } from "./badge.syled";

export const Badge = ({ content, callback, field, editMode }) => {
    console.log(field)
    return (
        <BadgeCnt backgroundColor={field === 'requirements' && 'lightblue'} color={field === 'requirements' && '#7d7d7d'}>
            {content}
            {editMode && <i className="fa-solid fa-xmark" onClick={callback}  ></i>}
        </BadgeCnt>
    );
} 