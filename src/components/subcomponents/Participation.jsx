import { DetailText } from "../../styles/styles.styled"

export const Participation = ({participation}) => {
    
    return (
        <DetailText>
            <i className="fa-solid fa-users"></i> {participation} joined
        </DetailText>            
    )
}