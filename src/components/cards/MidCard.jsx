import { Link } from "react-router-dom";
import { CardMid, CardMidImage } from "./cards.styled";
import { Col, Row, Wrapper } from "../../styles/styles.styled";
import { Date, Location, Participation, Time, Title, Url } from "../subcomponents";

export const MidCard = ({ event, width }) => {

  return (
    <CardMid width={width}>
      <Wrapper height='65%' style={{borderRadius:'var(--cardMid-radius)'}}>
        <Link to={`/events/${event.id}`}>
          <CardMidImage imgUrl={event.images[0]? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        </Link>
      </Wrapper>

        <Col height='35%' style={{gap:'0.5rem', width: '90%', padding:'0.3rem 0 0.5rem 0', borderRadius:'var(--cardMid-radius)'}}>
              <Title event={event}/>

              <Col style={{gap:'0.5rem', alignItems:'flex-start'}}>
                <Row style={{gap:'2rem', justifyContent:'space-between'}}>
                  <Date event={event} />
                  <Time event={event} />  
                </Row>
                {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
                <Participation event={event}/>
              </Col>
        </Col>
    </CardMid>
  );
};
