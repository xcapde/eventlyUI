import { Link } from "react-router-dom";
import { Card, CardImage } from "./cards.styled";
import { Col, Gradient, Row, Wrapper } from "../../styles/styles.styled";
import { OptionsModule } from "../buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { ModuleDetails } from "../information/ModuleDetails";
import { InfoText } from "../information/InfoText";
import { Avatar } from "../avatar/Avatar";


export const MainCard = ({ event }) => {


  return (
    <Card>
      <OptionsModule/>
       
        <CardImage imgUrl={event.images[0]? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        {/* <CardImage imgUrl={event.images[0]? event.images[0] : 'https://media.istockphoto.com/photos/white-box-top-view-picture-id1338610370?b=1&k=20&m=1338610370&s=170667a&w=0&h=iWNgE4P9avZ2cWFqrV_JC1fFL_a1F6Mcaz9zTjiWeqA='} /> */}

      <Link to={`/events/${event.id}`}>
        <Gradient/>
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
