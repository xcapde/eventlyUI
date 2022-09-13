import { Link } from "react-router-dom";
import { Card, CardImage } from "./cards.styled";
import { Col, Gradient, Row, Wrapper } from "../../styles/styles.styled";
import { OptionsModule } from "../buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { InfoText } from "../information/InfoText";
import { Avatar } from "../avatar/Avatar";


export const MainCard = ({ event }) => {


  return (
    <Card>
      {/* <OptionsModule/> */}
      <Link to={`/events/${event.id}`}>
        <CardImage imgUrl={event.images[0]? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        {/* <Gradient/> */}
      </Link>

      <Col height='auto' style={{alignItems:'flex-start', width: '90%', padding:'1rem 0'}}>
          <Row>
              <InfoText event={event}/>
              <Avatar imgUrl={event.publisher.avatar} scale='0.8'/>
          </Row>
          <Wrapper>
              <br/>Component avatars
          </Wrapper>
      </Col>
    </Card>
  );
};
