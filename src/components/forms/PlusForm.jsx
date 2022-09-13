import { Wrapper } from "../../styles/styles.styled"
import { ImageForm } from "./ImageForm"
import { ReqsForm } from "./ReqsForm"
import { TagsForm } from "./TagsForm"

export const PlusForm = ({ event, uploadImg, deleteImg, addReq, deleteReq, addTags, deleteTags }) => {

    return (
        <Wrapper>
            <ReqsForm event={event} addReq={addReq} deleteReq={deleteReq} />
            <TagsForm event={event} addTags={addTags} deleteTags={deleteTags} />
            <ImageForm event={event} uploadImg={uploadImg} deleteImg={deleteImg} />
        </Wrapper>
    )
}