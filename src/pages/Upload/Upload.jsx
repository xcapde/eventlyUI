import { UploadForm } from "../../components/forms/UploadForm";
import { EventTitle } from "../../components/subcomponents";
import { eventService } from "../../services/API/eventService";
import { Col, View } from "../../styles/styles.styled";

export const Upload = () => {


    const postEvent = (data) => {
        eventService.postEvent(data).then(res => {
            if (!res) return //modal;
            //bad reqeuest -> jwt
            console.log(res);
        })
    }

    return (
        <View style={{ height: '90vh', width: '100vw', textAlign: "center" }}>
            <Col style={{ height: '40vh' }}>
                <EventTitle title={"Upload your event!"} />
            </Col>
            <Col>
                <UploadForm postEvent={postEvent} />
            </Col>
        </View>
    )
}