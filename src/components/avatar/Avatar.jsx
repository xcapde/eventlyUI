import { AvatarImg } from "./avatar.styled"


export const Avatar = ({imgUrl, scale}) => {
    return (
            <AvatarImg imgUrl={imgUrl} scale={scale}/>
    )
}