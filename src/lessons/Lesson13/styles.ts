import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;
  background-color: rgb(218, 226, 230);
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  background-color: rgb(178, 191, 248);
  border: 2px solid rgb(11, 11, 72);
  box-shadow: 0 0 25px;
  font-size: 40px;
  font-weight: bold;
  width: 900px;
  min-height: 600px;
  max-height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ImgComponent = styled.img`
  background-position: center;
  background-size: cover;
`;

export const ErrorComponent = styled.div`
  color: red;
  font-size: 40px;
`;
