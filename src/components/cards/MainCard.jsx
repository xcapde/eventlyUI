import { Avatar, Card, ImageCard, ImageControl, Description, Participations, TimeCard, Title } from "./cards.styled";

export const MainCard = () => {
  return (
    <Card>
        <ImageControl>
            <ImageCard src={'https://s1.eestatic.com/2020/01/03/ciencia/nutricion/chocolate-cenas_de_navidad-ocu_organizacion_de_consumidores_y_usuarios_456966012_141650372_1706x960.jpg'} />
        </ImageControl>
        <Title>patata</Title>
        <TimeCard>18:30</TimeCard>
        <Description>desc</Description>
        <Participations>participations</Participations>
        {/* <Avatar>avatar</Avatar> */}
     
    </Card>
  );
};
