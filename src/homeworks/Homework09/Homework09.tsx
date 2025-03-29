import { BoxInfo, DivContainer, UserImg, TitleImgPContainer } from "./styles";
import User from "../../assets/avatar.jpg";
import VipUser from "../../assets/vip.png";

function Homework09() {
  return (
    <DivContainer>
      <BoxInfo primary>
        <TitleImgPContainer>
          <h2>VIP Пользователь</h2>
          <UserImg src={VipUser} />
          <p>
            Доступ к эксклюзивным функциям, персональный менеджер и приоритетная
            поддержка.
          </p>
        </TitleImgPContainer>
      </BoxInfo>

      <BoxInfo>
        <TitleImgPContainer>
          <h2>Обычный Пользователь</h2>
          <UserImg src={User} />
          <p>
            Стандартный доступ, базовые функции и поддержка в порядке очереди.
          </p>
        </TitleImgPContainer>
      </BoxInfo>
    </DivContainer>
  );
}

export default Homework09;
