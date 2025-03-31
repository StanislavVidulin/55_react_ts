import styled from "@emotion/styled";

interface ProfileCardStyledProps {
  vip?: boolean
}

export const Homework09Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(188, 219, 219);
`;

export const ProfileCard = styled.div<ProfileCardStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: ${({vip}) => vip ? '650px' : '600px'};
  height: ${({vip}) => vip ? '550px' : '500px'};
  padding: 20px;
  background-color: ${({ vip }) => vip ? 'rgb(25, 23, 96)' : 'rgb(67, 65, 134)'};
  color: white;
  font-size: 20px;
  border-radius: 6px;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const Description = styled.div``;

// Мои стили
// import { BoxInfoStyledProps } from "../../lessons/Lesson09/styles";

// export const BoxInfo = styled.div<BoxInfoStyledProps>`
//   padding: 20px;
//   width: ${({ primary }) => (primary ? "550px" : "500px")};
//   height: ${({ primary }) => (primary ? "350px" : "300px")};
//   background-color: ${({ primary }) => (primary ? "#E8EB00" : "#EAB6A5")};
// `;

// export const DivContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
//   flex: 1;
//   padding: 40px;
//   background-color: #edeceb;
// `;

// export const TitleImgPContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;
// `;

// export const UserImg = styled.img`
//   width: 130px;
// `;

// export const TitleCard = styled.h2`
// font-size: 40px;
// `;

// export const TextCard = styled.p`
// font-size: 27px;
// `;
