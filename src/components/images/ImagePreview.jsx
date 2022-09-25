import { IconBg, SmallPreview, SmallPreviewImg } from "./images.styled"

export const ImagePreview = ({ url, callback }) => {

    return (
        <SmallPreview>
            <SmallPreviewImg imgUrl={url} />
            {url.includes("blob") ? null : <IconBg onClick={()=>callback(url)} />}
        </SmallPreview>
    )
}