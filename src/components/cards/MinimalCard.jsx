import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarOnImg, ExtremsRow, Gradient  } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { Card, CardBody, CardMinImg, InfoOnImg} from "./cards.styled";
import { EventLocation, EventTime, Participation } from "../subcomponents";

export const MinimalCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  return (
    <Card>
        <CardMinImg imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} /> 
        <AvatarOnImg imgUrl={props.event.publisher.avatar}/>
            <InfoOnImg>
            <EventDate event={props.event}/>
            <EventTime/>         
            <EventLocation/>   
        </InfoOnImg>
    <Link to={`/event/${props.event.id}`}>
        <Gradient/>
    </Link>
        <CardBody>
            <EventTitle event={props.event}/> 
            <ExtremsRow>
                <Participation/>         
                <MainButton>JOIN</MainButton> 
            </ExtremsRow>
        </CardBody>
    </Card>
  );
};
