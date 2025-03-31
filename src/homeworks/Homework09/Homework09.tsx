// import { BoxInfo, DivContainer, UserImg, TitleImgPContainer, TitleCard, TextCard } from "./styles";
// import User from "../../assets/avatar.jpg";
// import VipUser from "../../assets/vip.png";

import { Homework09Container, ProfileCard, Title, Description } from "./styles";


function Homework09() {
  return (

    <Homework09Container>
      <ProfileCard vip>
        <Title> VIP Пользователь</Title>
        <Description> Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</Description>
      </ProfileCard>
      <ProfileCard>
      <Title> Обычный Пользователь</Title>
      <Description>Стандартный доступ, базовые функции и поддержка в порядке очереди.</Description>
      </ProfileCard>
    </Homework09Container>


    // моё дз
    // <DivContainer>
    //   <BoxInfo primary>
    //     <TitleImgPContainer>
    //       <TitleCard>VIP Пользователь</TitleCard>
    //       <UserImg src={VipUser} />
    //       <TextCard>
    //         Доступ к эксклюзивным функциям, персональный менеджер и приоритетная
    //         поддержка.
    //       </TextCard>
    //     </TitleImgPContainer>
    //   </BoxInfo>

    //   <BoxInfo>
    //     <TitleImgPContainer>
    //       <TitleCard>Обычный Пользователь</TitleCard>
    //       <UserImg src={User} />
    //       <TextCard>
    //         Стандартный доступ, базовые функции и поддержка в порядке очереди.
    //       </TextCard>
    //     </TitleImgPContainer>
    //   </BoxInfo>
    // </DivContainer>
  );
}

export default Homework09;
