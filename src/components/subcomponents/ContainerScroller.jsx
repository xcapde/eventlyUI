import { DownBtn, UpBtn, ContainerScrollerCnt } from "../buttons/buttons.styled";

export const ContainerScroller = ({size}) => {


    const scroll = (e) => {
        let dir = e.target.id === 'up-btn' ? + e.target.parentElement.offsetTop * size : - e.target.parentElement.offsetTop * size;
        e.target.parentElement.parentElement.scrollTop += dir;
    }

    console.log(size)
    return (
        <ContainerScrollerCnt>
            <UpBtn id="up-btn" onClick={(e) => scroll(e)} />
            <DownBtn onClick={(e) => scroll(e)} />
        </ContainerScrollerCnt>
    )
}