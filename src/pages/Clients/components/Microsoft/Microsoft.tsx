import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { MicrosoftWrapper, LogoImg, CompanyInfo, BtnContainer } from "./styles";

function Microsoft() {
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <MicrosoftWrapper>
      <BtnContainer>
        <Button name="BACK" onClick={goToBackPage} />
      </BtnContainer>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"></LogoImg>
      <CompanyInfo>
        Microsoft Corporation («Ма́йкрософт») — американская публичная
        транснациональная корпорация, один из крупнейших в мире разработчиков в
        сфере проприетарного программного обеспечения для различного рода
        вычислительной техники — персональных компьютеров, игровых приставок,
        КПК, мобильных телефонов и прочего. Наиболее известными продуктами
        являются семейства операционных систем Windows и офисных приложений
        Microsoft Office. Кроме этого компания разрабатывает и продаёт ноутбуки
        и планшетные компьютеры под брендом Surface, игровые консоли Xbox, а
        также аксессуары для персональных компьютеров (клавиатуры, мыши и так
        далее). Штаб-квартира компании находится в городе Редмонд, штат
        Вашингтон, США. Штат сотрудников корпорации по состоянию на 30 июня 2022
        года составлял 221 тыс. человек. В 2018 году заняла второе место в
        списке 500 лучших работодателей мира по мнению журнала Forbes. В списке
        крупнейших публичных компаний мира Forbes Global 2000 за 2022 год
        компания заняла 12-е место. В числе крупнейших компаний США по размеру
        выручки в 2022 году (список Fortune 500) Microsoft заняла 14-е место.
      </CompanyInfo>
    </MicrosoftWrapper>
  );
}

export default Microsoft;
