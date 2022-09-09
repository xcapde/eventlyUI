import { useEffect, useState } from "react";
import { Col, Row } from "../../styles/styles.styled";
import { EventTitle } from "../subcomponents/EventTitle";
import { CardXS, CardXSImage } from "./cards.styled";
import { ParticipationXS} from "../subcomponents";
import { Link } from "react-router-dom";
import { Avatar } from "../subcomponents/Avatar";
import { PrimaryButton } from "../buttons";
import { EventDetails } from "../../components/eventInfo/EventDetails";

export const SmallCard = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    setEvent(props.event)
  },[props.event])

  
    return (
      <CardXS>
        <Link to={`/events/${props.event.id}`}>
          <CardXSImage imgUrl='https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg' />
        </Link>

        <Col width='70%' margin="0 auto">
          <Col alignItems='flex-start'>
            <Row height="none">
              <EventTitle event={props.event} fontSize='var(--font-size-cardXS-title)'/>
              <Avatar imgUrl={props.event.publisher.avatar} scale='0.5'/>
            </Row>
            <Row>
              <EventDetails event={props.event} justifyContent='space-evenly'/>
              <Col width='unset' alignItems='flex-end' padding='0 0.3rem' gap='0.5rem'>
                <ParticipationXS participation={props.event.participantsCount}/> 
                <PrimaryButton content='JOIN' height='var(--cardXS-button-height)' width='var(--cardXS-button-width)' fontSize='var(--font-size-cardXS-button)'/>
              </Col>
            </Row>
          </Col> 
        </Col>
      </CardXS>
    );
  };