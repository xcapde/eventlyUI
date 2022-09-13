import { Col, Row, Title } from "../../styles/styles.styled";
import { CardXS, CardXSImage } from "./cards.styled";
import { Link } from "react-router-dom";
import { Details } from "../information/Details";
import { Date, Location, Time, Url } from "../subcomponents";

export const SmallCard = ({ event }) => {
  
  return (
    <CardXS>
      <Row>
        <Link to={`/events/${event.id}`}>
          <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://images.hola.com/imagenes/cocina/tecnicas-de-cocina/20210804194039/mejores-trucos-para-hacer-barbacoas/0-981-794/barbacoa-port-adobe-t.jpg'} />
        </Link>
        <Col style={{gap:'0.5rem', paddingRight:'1rem'}}>
          <Title style={{fontSize:'var(--font-size-cardXS-title)', fontWeight:'bolder'}}>{event.title}</Title>
          <Col style={{gap:'0.5rem', height:'unset', alignItems:'flex-start'}}>
            <Row style={{gap:'3rem', height:'unset', justifyContent:'flex-start'}}>
                <Date event={event} />
                <Time event={event} />  
            </Row>
            {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
          </Col>
          <p style={{fontSize:"small", textAlign:'center', width:'100%'}}>Joined Component</p>

        </Col>
      </Row>
    </CardXS>
  );
};