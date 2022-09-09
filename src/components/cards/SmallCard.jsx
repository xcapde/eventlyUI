import { useEffect, useState } from "react";
import { Col, Row } from "../../styles/styles.styled";
import { EventTitle } from "../subcomponents/EventTitle";
import { CardXS, CardXSImage } from "./cards.styled";
import { ParticipationXS } from "../subcomponents";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../buttons";
import { EventDetails } from "../../components/eventInfo/EventDetails";
import { Avatar } from "../avatar/Avatar";

export const SmallCard = ({ event }) => {
  return (
    <CardXS>
      <Link to={`/events/${event.id}`}>
        <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3k1pCRW8-jZW5i3csCFggpsnYKWpi1axTyQ&usqp=CAU'} />
      </Link>

      <Col width='70%' margin="0 auto">
        <Col alignItems='flex-start'>
          <Row height="none">
            <EventTitle title={event.title} fontSize='var(--font-size-cardXS-title)' />
            <Avatar imgUrl={event.publisher.avatar} scale='0.5' />
          </Row>
          <Row>
            <EventDetails event={event} justifyContent='space-evenly' />
            <Col width='unset' alignItems='flex-end' padding='0 0.3rem' gap='0.5rem'>
              <ParticipationXS participation={event.participantsCount} />
              <PrimaryButton content='JOIN' callback={() => console.error('not implemented yet')} />
            </Col>
          </Row>
        </Col>
      </Col>
    </CardXS>
  );
};