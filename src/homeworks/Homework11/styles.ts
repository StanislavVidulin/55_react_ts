import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;
  background-color: rgb(218, 226, 230);
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  min-width: 100px;
  min-height: 100px;
  padding: 20px;
  background-color: rgb(5, 255, 201);
  border: 2px solid rgb(11, 11, 72);
  font-size: 30px;
  font-weight: bold;
`;