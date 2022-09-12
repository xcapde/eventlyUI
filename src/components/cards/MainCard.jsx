import { Link } from "react-router-dom";
import { Card, CardImage } from "./cards.styled";
import { Avatar } from "../avatar/Avatar";
import { ModuleJoin } from "../information/ModuleJoin";
import { Row, Title, Wrapper } from "../../styles/styles.styled";
import { OptionsModule } from "../buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { Info } from "../information/Info";


export const MainCard = ({ event }) => {


  return (
    <Card>
      <OptionsModule/>
      <Link to={`/events/${event.id}`}>
        <CardImage imgUrl={event.images[0]? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
      </Link>
      <Wrapper height={'20vh'} width={'90%'}>
        <Row height={'20vh;'}>
          <Title>{event.title}</Title>
          <Avatar imgUrl={event.publisher.avatar} scale={'0.5'}/>
        </Row>
       <Info event={event}/>
        <ModuleJoin event={event} height={'20vh'}/>
      </Wrapper>
    </Card>
  );
};
