import { Col } from "../../styles/styles.styled"
import { PrimaryButton } from "../buttons"
import { Participation } from "./Participation"

export const DetailParticipation = ({participation}) => {
    
    return (
        <Col flexDirection={'row'} justifyContent={'space-between'}>
            <Participation participation={participation}/>
            <PrimaryButton content={'JOIN'} height={'var(--detail-button-height)'} width={'var(--detail-button-width)'} fontSize={'var(--font-size-button-detail)'}/>
        </Col>
    )
}