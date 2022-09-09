import { AvatarImg } from "./avatar.styled"


export const Avatar = ({imgUrl, scale, position, top, left}) => {
    return (
            <AvatarImg imgUrl={imgUrl} scale={scale} position={position} top={top} left={left}/>
    )
}