import styled from "@emotion/styled";
import { BoxInfoStyledProps } from "../../lessons/Lesson09/styles";

export const BoxInfo = styled.div<BoxInfoStyledProps>`
  padding: 20px;
  width: ${({ primary }) => (primary ? "550px" : "500px")};
  height: ${({ primary }) => (primary ? "350px" : "300px")};
  background-color: ${({ primary }) => (primary ? "#E8EB00" : "#EAB6A5")};
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
  background-color: #edeceb;
`;

export const TitleImgPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const UserImg = styled.img`
  width: 130px;
`;

export const TitleCard = styled.h2`
font-size: 40px;
`;

export const TextCard = styled.p`
font-size: 27px;
`;