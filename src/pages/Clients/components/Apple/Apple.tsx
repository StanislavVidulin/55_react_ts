import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { LogoImg, CompanyInfo, AppleWrapper, BtnContainer } from "./styles";

function Apple() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/clients/microsoft");
  };

  const goToBackPage = () => {
    navigate(-1);
  };
  return (
    <AppleWrapper>
      <BtnContainer>
        <Button name="BACK" onClick={goToBackPage} />
        <Button name="NEXT" onClick={goToNextPage} />
      </BtnContainer>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"></LogoImg>
      <CompanyInfo>
        Apple — американская корпорация, разработчик персональных и планшетных
        компьютеров, аудиоплееров, смартфонов, программного обеспечения и
        цифрового контента. Штаб-квартира расположена в Купертино, штат
        Калифорния. Практически вся продукция Apple выпускается контрактными
        производителями на заводах в Азии, крупнейшим подрядчиком является
        тайваньская компания Foxconn, крупнейший завод — в Чжэнчжоу. Один из
        пионеров в области персональных компьютеров и современных многозадачных
        операционных систем с графическим интерфейсом. Более половины продаж
        компании приходится на iPhone, на 2021 год в мире использовалось около
        900 млн таких смартфонов. Крупнейшим рынком для компании являются США,
        также значительна доля в выручке Китая, Японии и ряда стран Европы. В
        августе 2018 года Apple стала первой американской компанией, чья
        рыночная капитализация превысила 1 трлн долларов США, и самой дорогой
        публичной компанией за всю историю, обойдя предыдущего рекордсмена —
        компанию PetroChina (1,005 трлн долларов в ноябре 2007 года). 30 июня
        2023 года Apple стала первой компанией в мире, рыночная капитализация
        которой достигла 3 триллионов долларов США. В 2022 году Apple заняла
        третье место в списке крупнейших компаний США Fortune 500. В списке
        крупнейших компаний мира Forbes Global 2000 Apple заняла 7-е место.
      </CompanyInfo>
    </AppleWrapper>
  );
}

export default Apple;
