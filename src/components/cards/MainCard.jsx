import { Link } from "react-router-dom";
import { BodyCntrl, CardMain, CardMainImage } from "./cards.styled";
import { Wrapper } from "../../styles/styles.styled";
import { Title } from "../subcomponents";
import { Details } from "../information/Details";

export const MainCard = ({ event, width }) => {

  return (
    <CardMain width={width}>
      <Wrapper height='65%' style={{ borderRadius: 'var(--cardMain-radius)' }}>
        <Link to={`/events/${event.id}`}>
          <CardMainImage imgUrl={event.images[0] ? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        </Link>
      </Wrapper>

      <BodyCntrl height='35%'>
        <Title event={event} />
        <Details event={event}/>

            {/* {width &&
            <FloatingCnt position="absolute" bottom="-3rem" right="0%">
              <ParticipationModule participations={event.participations} participantsCount={event.participantsCount} />
            </FloatingCnt>}
            {(!width || (width && event.participations <= 0 ) ) && <Participation event={event} />} */}
      
      </BodyCntrl>

    </CardMain>
  );
};
