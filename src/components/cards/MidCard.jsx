import { Link } from "react-router-dom";
import { CardMid, CardMidImage } from "./cards.styled";
import { Col, Row, Wrapper } from "../../styles/styles.styled";
import { Date, Location, Time, Title, Url } from "../subcomponents";

export const MidCard = ({ event }) => {

  return (
    <CardMid>
      <Wrapper height='65%' style={{borderRadius:'var(--cardMid-radius)'}}>
        <Link to={`/events/${event.id}`}>
          <CardMidImage imgUrl={event.images[0]? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        </Link>
      </Wrapper>

        <Col height='35%' style={{gap:'1rem', width: '90%', padding:'0.3rem 0 0.5rem 0', borderRadius:'var(--cardMid-radius)'}}>
              <Title event={event}/>

              <Col style={{gap:'0.5rem', alignItems:'flex-start'}}>
                <Row style={{gap:'1rem', justifyContent:'space-between'}}>
                  <Date event={event} />
                  <Time event={event} />  
                </Row>
                {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
                 <div style={{fontSize:"small", textAlign:'center', width:'100%'}}>Join Component</div>
              </Col>
        </Col>
    </CardMid>
  );
};
