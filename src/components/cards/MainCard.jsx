import { Link } from "react-router-dom";
import { CardMain, CardMainImage } from "./cards.styled";
import { Col, FloatingCnt, Row, Wrapper } from "../../styles/styles.styled";
import { Date, Location, Participation, Time, Title, Url } from "../subcomponents";
import { ParticipationModule } from "../participations/ParticipationModule";

export const MainCard = ({ event, width }) => {

  return (
    <CardMain width={width}>
      <Wrapper height='65%' style={{ borderRadius: 'var(--cardMain-radius)' }}>
        <Link to={`/events/${event.id}`}>
          <CardMainImage imgUrl={event.images[0] ? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        </Link>
      </Wrapper>

      <Col height='35%' style={{ gap: '0.5rem', width: '90%', padding: '0.3rem 0 0.5rem 0', borderRadius: 'var(--cardMain-radius)' }}>
        <Title event={event} />

        <Col style={{ gap: '0.5rem', alignItems: 'flex-start' }}>
          <Row style={{ gap: '2rem', justifyContent: 'flex-start', position: 'relative' }}>
            <Date event={event} />
            <Time event={event} />
            {width &&
              <FloatingCnt position="absolute" bottom="-3rem" right="0%">
                <ParticipationModule participations={event.participations} participantsCount={event.participantsCount} />
              </FloatingCnt>}
          </Row>
          {event.type === "online" ?
            <Url event={event} /> : <Location event={event} />}
          {(!width || (width && event.participations <= 0 ) ) && <Participation event={event} />}
        </Col>
      </Col>

    </CardMain>
  );
};
