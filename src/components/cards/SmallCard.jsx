import { AvatarImg, ExtremsRow } from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { Participations } from "../subcomponents/Participations";
import { EventDate } from "../subcomponents/subparts/EventDate";
import { EventLocation } from "../subcomponents/subparts/EventLocation";
import { EventTime } from "../subcomponents/subparts/EventTime";
import { EventTitle } from "../subcomponents/subparts/EventTitle";
import { CardXS, CardXSImage, CardXSText } from "./cards.styled";

export const SmallCard = () => {
  
    return (
      <CardXS>
          <CardXSImage imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'} />
          <CardXSText>
            <ExtremsRow padding={'0'}>
              <EventTitle/>        
              <AvatarImg imgUrl={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'}/>
            </ExtremsRow>        
            <EventLocation/>
            <EventDate/>
            <EventTime/>
            <ExtremsRow padding={'0'}>
              <Participations/>
              <MainButton>JOIN</MainButton>    
              </ExtremsRow>        
          </CardXSText>
      </CardXS>
    );
  };