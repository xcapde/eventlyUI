import { Col, Row, Title } from "../../styles/styles.styled";
import { CardXS, CardXSImage } from "./cards.styled";
import { Link } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { Info } from "../information/Info";
import { ModuleJoin } from "../information/ModuleJoin";

export const SmallCard = ({ event }) => {
  
  return (
    <CardXS>
      <Row>
        <Link to={`/events/${event.id}`}>
          <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://images.hola.com/imagenes/cocina/tecnicas-de-cocina/20210804194039/mejores-trucos-para-hacer-barbacoas/0-981-794/barbacoa-port-adobe-t.jpg'} />
        </Link>

      <Col width='100%'>
        <Col alignItems='flex-start'>
        <Row height={'10vh;'}>
          <Title style={{fontSize:'var(--font-size-cardXS-title)'}}>{event.title}</Title>
          <Avatar imgUrl={event.publisher.avatar} scale={'0.5'}/>
        </Row>
        <Info event={event}/>
        <ModuleJoin event={event}/>
        </Col>
      </Col>
      </Row>
    </CardXS>
  );
};