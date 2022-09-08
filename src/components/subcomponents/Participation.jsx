import { Col } from "../../styles/styles.styled"

export const Participation = ({participation}) => {
    
    return (
        <Col gap="0.5rem" width="unset">
                <i className="fa-solid fa-users"></i>
                {participation} joined
        </Col>            
    )
}