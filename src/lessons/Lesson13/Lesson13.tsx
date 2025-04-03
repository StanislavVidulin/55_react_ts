import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";
import {
    Lesson13Container,
    ImgContainer,
    ImgComponent,
    ErrorComponent,
} from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {

  const [image, setImage] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [hideBtn, setHideBtn] = useState<boolean>(false);

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      getImage();
    }
  };

  const DOG_IMAGES: string = "https://dog.ceo/api/breeds/image/random";

  const deleteHandler = () => {
    setImage([]);
    setHideBtn((prevValue) => !prevValue);
  };

  const getImage = async () => {
    setErrorMessage(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(DOG_IMAGES);
      setImage((prevImage) => [...prevImage, response.data.message]);
      setHideBtn(true);
      
    } catch (error: any) {
      setErrorMessage(error.message);
      setImage([]);
      setHideBtn(false);

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { getImage() }, []);

  // useEffect(() => { getImage () }, [inputValue]);

  return (
    <Lesson13Container>
      {isLoading ? (
        <Spinner />
      ) : (
        image.map((image) => (
          <ImgContainer>
            <ImgComponent src={image} key={v4()} />
          </ImgContainer>
        ))
      )}
      <ErrorComponent>{errorMessage}</ErrorComponent>
      <Input name="note" value={inputValue} onChange={changeInputValue} />
      <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading} />
      {hideBtn && <Button name="DELETE ALL DATA" onClick={deleteHandler} />}
    </Lesson13Container>
  );
}

export default Lesson13;
