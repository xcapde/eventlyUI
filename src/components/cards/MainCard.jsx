import { Col, Row } from "../../styles/styles.styled";
import { Participations } from "../subcomponents/Participations";
import { EventLocationDetails } from "../subcomponents/subparts/EventLocationDetails";
import { EventTime } from "../subcomponents/subparts/EventTime";
import { EventTitle } from "../subcomponents/subparts/EventTitle";
import { AvatarImgOnImg, Card, ImageCard } from "./cards.styled";

export const MainCard = () => {
  return (
    <Card>
        <Col>
          <AvatarImgOnImg imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"/>
          <ImageCard imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'} />
          <Col>
          <Row>
            <EventTitle/>
            <EventTime/>
          </Row>
          <EventLocationDetails/>
        </Col>
        </Col>
        
        <Participations/>     
    </Card>
  );
};
