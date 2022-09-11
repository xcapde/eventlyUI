import { Wrapper } from "../../styles/styles.styled"
import { ImageForm } from "./ImageForm"
import { ReqsForm } from "./ReqsForm"
import { TagsForm } from "./TagsForm"

export const PlusForm = ({ event , uploadImg, deleteImg}) => {

    return (
        <Wrapper style={{ border: '1px solid black' }}>
            <ImageForm event={event} uploadImg={uploadImg} deleteImg={deleteImg}/>
            <ReqsForm event={event} />
            <TagsForm event={event} />
        </Wrapper>
    )
}