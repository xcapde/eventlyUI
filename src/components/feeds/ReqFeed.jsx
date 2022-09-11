import { DetailText } from "../../styles/styles.styled"
import { TrashIcon } from "../buttons/buttons.styled"
import { UlFeed } from "./feed.styled"

export const ReqFeed = ({ requirements, deleteReq }) => {
    return (
        <UlFeed>
            {requirements.map((req, key) => (
                <li key={key}><TrashIcon onClick={() => deleteReq(req)} /><DetailText>{req}</DetailText></li>
            ))}
        </UlFeed>
    )
}