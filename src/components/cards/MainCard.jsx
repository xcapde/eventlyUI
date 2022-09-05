import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarImg  } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { Card, CardHeader, CardImage, CardLocationSchedule, CardParticipation, CardText, CardTextDetails} from "./cards.styled";
import { EventLocation, EventTime, Participation } from "../subcomponents";

export const MainCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  return (
    <Card>
      <Link to={`/event/${props.event.id}`}>
        <CardImage imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'} />
      </Link>
      <CardHeader>
        <EventTitle event={props.event}/>        
        <AvatarImg imgUrl={props.event.publisher.avatar}/>
      </CardHeader>      
      <CardTextDetails>
        <CardLocationSchedule>
          <EventLocation/>
          <EventDate/>
          <EventTime/>            
        </CardLocationSchedule>
        <CardParticipation>
          <Participation/>  
          <MainButton>JOIN</MainButton> 
        </CardParticipation>           
      </CardTextDetails>
    </Card>
  );
};
