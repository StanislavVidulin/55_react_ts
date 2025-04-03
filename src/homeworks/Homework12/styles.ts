import styled from "@emotion/styled";

import backImage from '../../assets/background-image.jpg';

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: 1;
  background-color: rgb(218, 226, 230);
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  min-width: 400px;
  min-height: 300px;
  padding: 30px;
  background-color: rgb(178, 191, 248);
  border: 2px solid rgb(11, 11, 72);
  box-shadow: 0 0 25px;
  font-size: 40px;
  font-weight: bold;
`;

export const ErrorComponent = styled.div`
color: red;
font-size: 40px;
`;
