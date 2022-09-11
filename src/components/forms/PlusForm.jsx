import { Wrapper } from "../../styles/styles.styled"
import { ImageForm } from "./ImageForm"
import { ReqsForm } from "./ReqsForm"
import { TagsForm } from "./TagsForm"

export const PlusForm = ({ event , uploadImg}) => {

    return (
        <Wrapper style={{ border: '1px solid black' }}>
            <ImageForm event={event} />
            <ReqsForm event={event} />
            <TagsForm event={event} uploadImg={uploadImg}/>
        </Wrapper>
    )
}