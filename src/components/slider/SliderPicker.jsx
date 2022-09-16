import { SliderPreview, SmallPreviewImg } from "../images/images.styled"
import { Wrapper } from "./slider.styled"

export const SliderPiker = ({ images, current, callback }) => {

    return (
        <Wrapper>
            {images.map((image, key) => (
                <SliderPreview scale={key === current ? '1.1' : '1'}  key={key} onClick={() => callback(key)} >
                    <SmallPreviewImg imgUrl={image}/>
                </SliderPreview>
            ))}
        </Wrapper>
    )
}