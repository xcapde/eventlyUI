import { Row } from "../../styles/styles.styled"
import { PrimaryButton } from "../buttons"
import { Participation } from "../subcomponents/Participation"

export const ModuleJoin = ({event, height}) => {
    
    return (
        <Row height={height} justifyContent='space-between' gap='0.5rem' width='95%' margin=' 2%'>
            <Participation event={event}/>
            <PrimaryButton content={'JOIN'} callback={()=>console.error('not implemented yet')}/>
        </Row>
    )
}