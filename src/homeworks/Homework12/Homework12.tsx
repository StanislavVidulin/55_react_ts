import axios from "axios";
import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import { ErrorComponent, Homework12Container, ResultContainer } from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function Homework12() {

  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const CAT_URL: string = "https://catfact.ninja/fact";

  const getCatFacts = async () => {
    setError(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(CAT_URL);
      const data = response.data;
      setCatFact(`${data.fact}`);
    } 
    
    catch (error: any) {
      setError(('Ошибка! Попробуйте ещё раз: ' + error.message).toUpperCase());
      setCatFact(undefined);
    } 
    
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCatFacts();
  }, []);

  return (
    <Homework12Container>
      <ResultContainer>
        {isLoading ? <Spinner /> : catFact}
        <ErrorComponent>{error}</ErrorComponent>
        </ResultContainer>
      <Button name="GET MORE FACTS" onClick={getCatFacts} disabled={isLoading} />
    </Homework12Container>
  );
}

export default Homework12;
