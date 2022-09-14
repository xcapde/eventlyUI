import { Col, Row } from "../../styles/styles.styled";
import { CardXS, CardXSImage } from "./cards.styled";
import { Link } from "react-router-dom";
import { Date, Location, Time, Title, Url } from "../subcomponents";

export const SmallCard = ({ event }) => {
  
  return (
    <CardXS>
      <Row>
        <Link to={`/events/${event.id}`}>
          <Col width='var(--cardXS-img-size)'>
            <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://images.hola.com/imagenes/cocina/tecnicas-de-cocina/20210804194039/mejores-trucos-para-hacer-barbacoas/0-981-794/barbacoa-port-adobe-t.jpg'} />
          </Col>
        </Link>
        <Col width={'calc(100vh - var(--cardXS-img-size))'} style={{gap:'0.5rem', paddingRight:'1rem'}}>
          <Title event={event}/>
          <Col style={{gap:'0.5rem', height:'unset'}}>
            <Row style={{gap:'3rem'}}>
                <Date event={event} />
                <Time event={event} />  
            </Row>
            {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
          </Col>
          <p style={{fontSize:"small", textAlign:'center', width:'100%'}}>Join Component</p>

        </Col>
      </Row>
    </CardXS>
  );
};