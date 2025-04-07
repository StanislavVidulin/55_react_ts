import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";
import {
    Lesson13Container,
    ImgContainer,
    ImgComponent,
    ErrorComponent,
    ButtonContainer,
    InputContainer,
} from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {

  //1. Создание всех состояний
  const [image, setImage] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  // const [hideBtn, setHideBtn] = useState<boolean>(false);


  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      getImage();
    }
  };

  // 2. Сохранение переменных
  const DOG_IMAGES: string = "https://dog.ceo/api/breeds/image/random";
  
  // 3. Создание дополнительных функций
  const getImage = async () => {
    setErrorMessage(undefined);
    
    try {
      setIsLoading(true);
      const response = await axios.get(DOG_IMAGES);
      setImage((prevImage) => [...prevImage, response.data.message]);
      // setHideBtn(true);
      
    } catch (error: unknown) {
      // При типизации ошибки, необходимо указывать специальный тип для неё unknown - 
      // который в дальнейшем требует проверки типа параметра error, что мы и делаем.
      // В первую очередь проверяем является ли эта ошибка axios (axios.isAxiosError(error))
      // а во всех остальных случаях сохраняем заготовленный текст ошибки
      if(axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unknown error')
      }
      setImage([]);
      // setHideBtn(false);
      
    } finally {
      setIsLoading(false);
    }
  };
  
    const deleteHandler = () => {
      setImage([]);
      // setHideBtn((prevValue) => !prevValue);
    };
  
    // 5 (необязательно) Создание массива(ов) элементов
    const imagesList = image.map((image: string) => {
      return (
        <ImgContainer key={v4()}>
      <ImgComponent src={image} />
    </ImgContainer>
  )
});

// 6 useEffect
useEffect(() => { getImage() }, []);
// useEffect(() => { getImage () }, [inputValue]);

  return (
    <Lesson13Container>
      {isLoading ? (
        <Spinner />
      ) : (
        imagesList
      )}
      <ErrorComponent>{errorMessage}</ErrorComponent>
      <InputContainer>
      <Input name="note" value={inputValue} onChange={changeInputValue} />
      </InputContainer>
      <ButtonContainer>
      <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading} />
      {image.length !== 0 && <Button name="DELETE ALL DATA" onClick={deleteHandler} danger />}
      </ButtonContainer>
    </Lesson13Container>
  );
}

export default Lesson13;
