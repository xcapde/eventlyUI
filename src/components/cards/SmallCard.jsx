import { BodyCntrl, CardXS, CardXSImage, ImgCntrl } from "./cards.styled";
import { Link } from "react-router-dom";
import { Title } from "../subcomponents";
import { Details } from "../information/Details";

export const SmallCard = ({ event }) => {
  
  return (
    <CardXS>
        <Link to={`/events/${event.id}`}>
          <ImgCntrl>
            <CardXSImage imgUrl={event.images[0] ? event.images[0] : 'https://images.hola.com/imagenes/cocina/tecnicas-de-cocina/20210804194039/mejores-trucos-para-hacer-barbacoas/0-981-794/barbacoa-port-adobe-t.jpg'} />
          </ImgCntrl>
        </Link>

        <BodyCntrl width='calc(var(--cardXS-width) - var(--cardXS-imgCntrl-size) - 10px)'>
          <Title event={event}/>
          <Details event={event}/>
        </BodyCntrl>
    </CardXS>
  );
};