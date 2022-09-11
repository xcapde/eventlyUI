import { IconBg, SmallPreview, SmallPreviewImg } from "./images.styled"

export const ImagePreview = ({ url, callback }) => {

    return (
        <SmallPreview>
            <SmallPreviewImg imgUrl={url} />
            <IconBg onClick={()=>callback(url)} />
        </SmallPreview>
    )
}