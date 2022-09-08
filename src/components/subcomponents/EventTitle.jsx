import { Title } from "../../styles/styles.styled"

export const EventTitle = ({title, margin}) => {
    return (
        <Title margin={margin}> 
            {title}
        </Title>
    )
}