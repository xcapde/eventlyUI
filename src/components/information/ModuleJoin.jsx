import { Row } from "../../styles/styles.styled"
import { PrimaryButton } from "../buttons"
import { Participation } from "../subcomponents/Participation"

export const ModuleJoin = ({event, height}) => {
    
    return (
        <Row height={height} justifyContent={'space-between'}>
            <Participation event={event}/>
            <PrimaryButton content={'JOIN'} callback={()=>console.error('not implemented yet')}/>
        </Row>
    )
}