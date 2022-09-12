import { Link } from "react-router-dom";
import { MainButton } from "../buttons/buttons.styled";
import { Card, CardHeader, CardImage, CardLocationSchedule, CardParticipation, DetailCardText } from "./cards.styled";
import { Date, Location, Participation, Time } from "../subcomponents";
import { Avatar } from "../avatar/Avatar";
import { ModuleDetails } from "../information/ModuleDetails";
import { ModuleJoin } from "../information/ModuleJoin";
import { Details } from "../information/Details";
import { Row, Title, Wrapper } from "../../styles/styles.styled";
import { OptionsModule } from "../buttons/burgers/CardBB/optionsMenu/OptionsModule";
import { Info } from "../information/Info";


export const MainCard = ({ event }) => {


  return (
    <Card>
      <OptionsModule/>
      <Link to={`/events/${event.id}`}>
        <CardImage imgUrl={event.images[0]? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
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
