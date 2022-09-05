import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarImg, ExtremsRow } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { Participations } from "../subcomponents/Participations";
import { EventDate } from "../subcomponents/subparts/EventDate";
import { EventLocation } from "../subcomponents/subparts/EventLocation";
import { EventTime } from "../subcomponents/subparts/EventTime";
import { EventTitle } from "../subcomponents/subparts/EventTitle";
import { Card, CardImage, CardText} from "./cards.styled";

export const MainCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  return (
    <Card>
        <Link to={`/event/${props.event.id}`}>
          <CardImage imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'} />
        </Link>
        <CardText>
          <ExtremsRow>
            <EventTitle event={props.event}/>        
            <AvatarImg imgUrl={props.event.publisher.avatar}/>
          </ExtremsRow>        
          <EventLocation/>
          <EventDate/>
          <EventTime/>
          <ExtremsRow>
            <Participations/>
            <MainButton>JOIN</MainButton>    
          </ExtremsRow>
        </CardText>
    </Card>
  );
};
