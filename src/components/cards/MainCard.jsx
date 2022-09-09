import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../buttons/buttons.styled";
import { EventDate } from "../subcomponents/EventDate";
import { EventTitle } from "../subcomponents/EventTitle";
import { Card, CardHeader, CardImage, CardLocationSchedule, CardParticipation, DetailCardText } from "./cards.styled";
import { EventLocation, EventTime, Participation } from "../subcomponents";
import { Avatar } from "../avatar/Avatar";

export const MainCard = ({ event }) => {

  return (
    <Card>

      <Link to={`/event/${event.id}`}>
        <CardImage imgUrl={'https://media1.faz.net/ppmedia/video/1338146715/1.170045/default-retina/wenn-der-vater-mit-dem-sohne.jpg'} />
      </Link>
      
      <CardHeader>
        <EventTitle title={event.title} />
        <Avatar imgUrl={event.publisher.avatar} />
      </CardHeader>

      <DetailCardText>

        <CardLocationSchedule>
          <EventLocation />
          <EventDate date={event.date} />
          <EventTime hour={event.hour} />
        </CardLocationSchedule>

        <CardParticipation>
          <Participation />
          <MainButton>JOIN</MainButton>
        </CardParticipation>

      </DetailCardText>

    </Card>
  );
};
