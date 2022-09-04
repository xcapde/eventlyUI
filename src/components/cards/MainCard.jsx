import { useEffect } from "react";
import { useState } from "react";
import { AvatarImg } from "../../styles/styles.styled";
import { Participations } from "../subcomponents/Participations";
import { EventDate } from "../subcomponents/subparts/EventDate";
import { EventLocation } from "../subcomponents/subparts/EventLocation";
import { EventTime } from "../subcomponents/subparts/EventTime";
import { EventTitle } from "../subcomponents/subparts/EventTitle";
import { Card, CardButton, CardImage, CardText, ExtremsRow} from "./cards.styled";

export const MainCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  return (
    <Card>
        <CardImage imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'} />
        <CardText>
          <ExtremsRow>
            <EventTitle event={event}/>        
            <AvatarImg imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'}/>
          </ExtremsRow>        
          <EventLocation/>
          <EventDate/>
          <EventTime/>
          <ExtremsRow>
            <Participations/>
            <CardButton>JOIN</CardButton>    
          </ExtremsRow>
        </CardText>
    </Card>
  );
};
