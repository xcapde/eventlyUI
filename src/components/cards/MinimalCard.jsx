import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarImg, ExtremsRow, Gradient  } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { Card, CardBody, CardMinImg, InfoOnImg} from "./cards.styled";
import { EventLocation, EventTime, EventType, Participation } from "../subcomponents";
import { BurgerButton } from "../buttons/BurgerButton";
import { OptionsMenu } from "../optionsMenu/OptionsMenu";
import { CloseButton } from "../buttons";

export const MinimalCard = (props) => {
  const [event, setEvent] = useState();
  const [menuIsActive, setMenuIsActive] = useState(false);

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  const showMenu=()=>{
    setMenuIsActive(!menuIsActive);
  };

  return (
    <Card>
      {menuIsActive? 
        <React.Fragment>
          <CloseButton action={showMenu}/>
          <OptionsMenu/>
        </React.Fragment>
        :
        <BurgerButton action={showMenu}/>
      }
        <CardMinImg imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} /> 
        <AvatarImg imgUrl={props.event.publisher.avatar} position={'absolute'} top={'1.5rem'} left={'1.5rem'}/>
        <InfoOnImg>
          <EventDate date={props.event.date}/>
          <EventTime hour={props.event.hour}/>     
          {props.event.type === 'online'?  <EventType type={props.event.type}/> : <EventLocation location={props.event.location}/>}  
        </InfoOnImg>
        

        <Link to={`/events/${props.event.id}`}>
            <Gradient/>
        </Link>

        <CardBody>
            <EventTitle title={props.event.title}/> 
            <ExtremsRow>
                <Participation participation={props.event.participantsCount}/>         
                <MainButton>JOIN</MainButton> 
            </ExtremsRow>
        </CardBody>
    </Card>
  );
};
