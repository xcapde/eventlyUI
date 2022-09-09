import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Gradient, Row  } from "../../styles/styles.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { Card, CardBody, CardMinImg, InfoOnImg} from "./cards.styled";
import { EventLocation, EventTime, EventType, Participation } from "../subcomponents";
import { PrimaryButton } from "../buttons";
import { Avatar } from "../avatar/Avatar";
import { MenuModule } from "../optionsMenu/MenuModule";

export const MinimalCard = ({event}) => {

  useEffect(() => {
  },[event])


  return (
    <Card>
        <MenuModule/>
        <CardMinImg imgUrl={event.images[0]? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} /> 

        <Avatar imgUrl={event.publisher.avatar} position={'absolute'} top={'var(--header-button-position-top)'} left={'var(--header-button-position-side)'}/>
        <InfoOnImg>
          <EventDate date={event.date}/>
          <EventTime hour={event.hour}/>     
          {event.type === 'online'?  <EventType type={event.type}/> : <EventLocation location={event.location}/>}  
        </InfoOnImg>
        

        <Link to={`/events/${event.id}`}>
            <Gradient/>
        </Link>

        <CardBody>
            <EventTitle title={event.title}/> 
            <Row justifyContent="justify-content: space-between">
                <Participation participation={event.participantsCount}/>         
                <PrimaryButton content={"JOIN"} callback={()=>console.error('not implemented yet')}/>        
            </Row>
        </CardBody>
    </Card>
  );
};
