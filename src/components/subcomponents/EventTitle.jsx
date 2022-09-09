import { Title } from "../../styles/styles.styled"

export const EventTitle = ({title, margin, fontSize}) => {
    return (
        <Title margin={margin} fontSize={fontSize}> 
            {title}
        </Title>
    )
}