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
          <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
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