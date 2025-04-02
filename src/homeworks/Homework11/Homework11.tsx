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
    // if(firstInputValue) { тело if } (с 0 начнётся)
    setShowCountChanges((prevValue) => prevValue + 1);
  }, [firstInputValue]);

  return (
    <MainContainer>
      <Input
        name="first_input"
        placeholder="Enter your note"
        value={firstInputValue}
        onChange={changeFirstInputValue}
      />
      <ResultContainer>
      {/* {showCountChanges -1} */}
        {showCountChanges === -1? 0 : showCountChanges}
        </ResultContainer>
      <Input
        name="second_input"
        placeholder="Enter your additional note"
        value={secondInputValue}
        onChange={changeSecondInputValue}
      />
    </MainContainer>
  );
}

export default Homework11;
