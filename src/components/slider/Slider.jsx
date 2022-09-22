import { useEffect } from "react";
import { useState } from "react";
import { ImgCnt } from "../../views/detail.styled";
import { Img, Touchable } from "../../styles/styles.styled";
import { SliderPiker } from "./SliderPicker";

export const Slider = ({ images, coordinateSliders }) => {

    const [image, setImage] = useState();
    const [current, setCurrent] = useState(0);
    const [start, setStart] = useState();

    useEffect(() => {
        if (!images || images.length === 0) return;
        const s = 3;
        const ms = s * 1000;
        let timer = setInterval(autoSlide, ms);
        return () => clearInterval(timer);
    });

    useEffect(() => {
        setImage(images[current])
    }, [current, images])

    const defineIndex = () => {
        let index = current + 1;
        if (index < 0) index = images.length - 1;
        if (index > images.length - 1) index = 0;
        return index;
    }

    const autoSlide = () => {
        setCurrent(defineIndex());
        coordinateSliders(defineIndex());
    }

    const slide = (e) => {
        let end = e.changedTouches[0].clientX;
        if (Math.abs(start - end) < 75) return;
        let index;
        start > end ? index = current - 1 : index = current + 1;
        if (index < 0) index = images.length - 1;
        if (index > images.length - 1) index = 0;
        setCurrent(index);
        coordinateSliders(index);
        setImage(images[index]);
    }

    const slideOnClick = (index) => {
        setCurrent(index);
        coordinateSliders(index);
        setImage(images[index]);
    }

    return (
        <ImgCnt>
            <Touchable zIndex={'calc(var(--index-gradient) + 1)'}
                position="relative"
                onTouchStart={(e) => setStart(e.changedTouches[0].clientX)}
                onTouchEnd={slide}>

                <Img
                    imgUrl={
                        image ?
                            image :
                            "https://images.unsplash.com/photo-1611366376326-5eaf36b54355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjBzdW5zZXR8ZW58MHx8MHx8&w=1000&q=80"
                    } />
                {images.length > 0 && <SliderPiker images={images} current={current} callback={slideOnClick} />}
            </Touchable>
        </ImgCnt>
    );
}