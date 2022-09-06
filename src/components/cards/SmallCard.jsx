import { useEffect, useState } from "react";
import { AvatarImg } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { CardLocationSchedule, CardParticipation, CardXS, CardXSBody, CardXSHeader, CardXSImage, CardXSTextDetails } from "./cards.styled";
import { EventLocation, EventTime, Participation } from "../subcomponents";
import { Link } from "react-router-dom";

export const SmallCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  
    return (
      <CardXS>
        <Link to={`/event/${props.event.id}`}>
          <CardXSImage imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'} />
        </Link>
        <CardXSBody>
        <CardXSHeader>
          <EventTitle title={props.event.title}/>        
          <AvatarImg imgUrl={props.event.publisher.avatar}/>
        </CardXSHeader>        
        <CardXSTextDetails>
          <CardLocationSchedule>
            <EventLocation/>
            <EventDate date={props.event.date}/>
            <EventTime hour={props.event.hour}/>                
          </CardLocationSchedule>
          <CardParticipation>
            <Participation/>
            <MainButton>JOIN</MainButton>    
          </CardParticipation>
        </CardXSTextDetails>
        </CardXSBody>
      </CardXS>
    );
  };