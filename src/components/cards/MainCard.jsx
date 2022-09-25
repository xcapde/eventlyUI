import { Link } from "react-router-dom";
import { BodyCntrl, CardMain, CardMainImage, ImgCnt } from "./cards.styled";
import { Wrapper } from "../../styles/styles.styled";
import { Title } from "../subcomponents";
import { Details } from "../information/Details";

export const MainCard = ({ event, width, height }) => {

  return (
    <CardMain width={width} height={height}>
      <ImgCnt height={height}>
        <Link to={`/events/${event.id}`}>
          <CardMainImage imgUrl={event.images[0] ? event.images[0] : 'https://media.revistagq.com/photos/62962efda59bf62af3fe45e7/16:9/w_2560%2Cc_limit/GettyImages-482135475.jpg'} />
        </Link>
      </ImgCnt>
      <BodyCntrl height='120px'>
        <Title event={event} />
        <Details event={event} />
      </BodyCntrl>
    </CardMain>
  );
};
