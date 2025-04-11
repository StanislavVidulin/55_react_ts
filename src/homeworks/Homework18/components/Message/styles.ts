import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 700px;
  height: 300px;
  background: #b5ff98;
  overflow-y: auto;
`;

export const MessageContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #2e2c2c;
`;