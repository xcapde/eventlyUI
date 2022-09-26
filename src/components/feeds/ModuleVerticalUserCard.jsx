import { Col, DetailText } from "../../styles/styles.styled"
import { UserCard } from "../cards/UserCard"
import { VerticalFeedDesktop} from "./feed.styled"

export const ModuleVerticalUserCard = ({ participations, height, width }) => {

    return (
        <Col width={width} height={height}>
            {participations && participations.length > 0? 
            <VerticalFeedDesktop gap='0.5rem'>
                    {participations.map((participation, key) =>
                        <UserCard key={key} user={participation.participant} />
                    )}
            </VerticalFeedDesktop>
            :
            <Col>
                <DetailText>There are no users joined yet.</DetailText>
            </Col>
            }
        </Col>
    )
}