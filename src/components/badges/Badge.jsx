import { BadgeCnt } from "./badge.syled";

export const Badge = ({ content, callback, field, editMode }) => {
    console.log(field)
    return (
        <BadgeCnt backgroundColor={field === 'requirements' && 'lightblue'} color={field === 'requirements' && 'blue'}>
            {content}
            {editMode && <i className="fa-solid fa-xmark" onClick={callback}  ></i>}
        </BadgeCnt>
    );
} 