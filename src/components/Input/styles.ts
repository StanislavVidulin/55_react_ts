import styled from "@emotion/styled";

interface InputComponentStyledProps {
    isSearch?: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputComponent = styled.input<InputComponentStyledProps>`
  width: 300px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: ${({ isSearch }) => isSearch ? '16px' : '4px'};
  font-size: 18px;
`;

export const Label = styled.label`
  font-size: 20px;
`;


/* .main-input {
    height: fit-content;
    padding: 10px;
    width: 250px;
    border: 2px solid #1b1101;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    font-size: 15px;
} */
