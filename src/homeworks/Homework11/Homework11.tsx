import { ChangeEvent, useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import { ResultContainer, MainContainer } from "./styles";

function Homework11() {
    
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");
  const [showCountChanges, setShowCountChanges] = useState<number>(-1);

  const changeFirstInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstInputValue(event.target.value);
  };

  const changeSecondInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInputValue(event.target.value);
  };

  useEffect(() => {
    setShowCountChanges((prevValue) => prevValue + 1);
  }, [firstInputValue]);

  return (
    <MainContainer>
      <Input
        name="first_input"
        value={firstInputValue}
        onChange={changeFirstInputValue}
      />
      <Input
        name="second_input"
        value={secondInputValue}
        onChange={changeSecondInputValue}
      />
      <ResultContainer>{showCountChanges}</ResultContainer>
    </MainContainer>
  );
}

export default Homework11;
