import { BadgeBox } from "./badge.syled";

export const Badge = ({content, backgroundColor, color}) => {

    return(
        <BadgeBox backgroundColor={backgroundColor} color={color}>
            {content}
            {/* <i className="fa-solid fa-xmark" iconcolor={color} ></i> */}
        </BadgeBox>
    );
} 