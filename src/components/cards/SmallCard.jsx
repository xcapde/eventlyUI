import { BodyCntrl, CardXS, CardXSImage, ImgCntrl } from "./cards.styled";
import { Link } from "react-router-dom";
import { Title } from "../subcomponents";
import { Details } from "../information/Details";
import Default from "../../assets/default/default.png"

export const SmallCard = ({ event }) => {
  
  return (
    <CardXS>
        <Link to={`/events/${event.id}`}>
          <ImgCntrl>
            <CardXSImage imgUrl={event.images[0] ? event.images[0] : Default} />
          </ImgCntrl>
        </Link>

        <BodyCntrl width='calc(var(--cardXS-width) - var(--cardXS-imgCntrl-size) - 10px)'>
          <Title event={event}/>
          <Details event={event}/>
        </BodyCntrl>
    </CardXS>
  );
};