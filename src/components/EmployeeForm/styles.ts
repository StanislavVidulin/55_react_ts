import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 600px;
  padding: 40px;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
  font-weight: bold;
`;

export const Title = styled.div`
  align-self: center;
  font-size: 55px;
  color: rgba(27, 15, 17, 1);
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`;

export const CheckboxLabel = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  font-size: 18px;
  color: red;
`;
