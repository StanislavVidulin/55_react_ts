import { useNavigate } from "react-router-dom";
import { AmazonWrapper, BtnContainer, CompanyInfo, LogoImg } from "./styles";
import Button from "../../../../components/Button/Button";


function Amazon() {
    
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/clients/apple");
  };

  const goToBackPage = () => {
    navigate(-1);
  };
  return (
    <AmazonWrapper>
      <BtnContainer>
        <Button name="BACK" onClick={goToBackPage} />
        <Button name="NEXT" onClick={goToNextPage} />
      </BtnContainer>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg"></LogoImg>
      <CompanyInfo>
        Amazon (Amazon.com, Inc.) — американская компания, крупнейшая в мире на
        рынках платформ электронной коммерции и публично-облачных вычислений по
        выручке и рыночной капитализации. Штаб-квартира — в Сиэтле. Основана
        Джеффом Безосом 5 июля 1994 года как интернет-магазин по продаже книг,
        но позже диверсифицировалась, начав продавать видео, MP3, аудиокниги
        (как потоковым способом, так и через возможность загрузки), программное
        обеспечение, видеоигры, электронику, одежду, мебель, еду, игрушки и
        ювелирные изделия. Компания также владеет издательским подразделением
        Amazon Publishing, киностудией Amazon Studios, производит линии бытовой
        электроники, включая электронные книги Kindle, планшеты Amazon Fire,
        Fire TV и смарт-динамик Echo, и является крупнейшим в мире поставщиком
        услуг в моделях IaaS и PaaS (Amazon Web Services). Поддерживает
        отдельные розничные сайты для некоторых стран, а также предлагает
        международную доставку своих продуктов в другие страны. Около 200
        миллионов человек подписались на Prime Video.
      </CompanyInfo>
    </AmazonWrapper>
  );
}

export default Amazon;
