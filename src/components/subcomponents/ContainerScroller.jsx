import { DownBtn, UpBtn, ContainerScrollerCnt } from "../buttons/buttons.styled";

export const ContainerScroller = ({ contSize, scrollSize }) => {


    const scroll = (e) => {
        let dir = e.target.id === 'up-btn' ? + e.target.parentElement.offsetTop * scrollSize : - e.target.parentElement.offsetTop * scrollSize;
        e.target.parentElement.parentElement.scrollTop += dir;
    }

    return (
        <ContainerScrollerCnt height={contSize}>
            <UpBtn id="up-btn" onClick={(e) => scroll(e)} />
            <DownBtn onClick={(e) => scroll(e)} />
        </ContainerScrollerCnt>
    )
}