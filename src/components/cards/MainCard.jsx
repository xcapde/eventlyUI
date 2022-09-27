import { Link } from "react-router-dom";
import { BodyCntrl, CardMain, CardMainImage, ImgCnt } from "./cards.styled";
import { Title } from "../subcomponents";
import { Details } from "../information/Details";
import Default from "../../assets/default/default.png"

export const MainCard = ({ event, width, height }) => {

  return (
    <CardMain width={width} height={height}>
      <ImgCnt height={height}>
        <Link to={`/events/${event.id}`}>
          <CardMainImage imgUrl={event.images[0] ? event.images[0] : Default} />
        </Link>
      </ImgCnt>
      <BodyCntrl height='var(--cardMain-body-height)'>
        <Title event={event} />
        <Details event={event} />
      </BodyCntrl>
    </CardMain>
  );
};
