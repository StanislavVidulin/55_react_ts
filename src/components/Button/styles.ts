import styled from "@emotion/styled";

interface ButtonComponentStyledProps {
  isDanger?: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyledProps>`
  width: 300px;
  height: fit-content;
  padding: 20px;
  background: ${({ isDanger }) => isDanger ? "rgb(250, 5, 5)" : "rgb(17, 48, 127)"};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;
`;

export const Homework10Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  background-color: rgb(234, 233, 154);
`;
