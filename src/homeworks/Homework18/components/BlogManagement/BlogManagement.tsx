import { ChangeEvent, createContext, useState } from "react";
import Input from "../../../../components/Input/Input";
import { BlogManagementWrapper } from "./styles";
import Button from "../../../../components/Button/Button";
import Card from "../Card/Card";
import { MessageContextInterface } from "./types";

export const MessageContext = createContext<MessageContextInterface>({
  message: "",
  changeMessage: () => {},
});

function BlogManagement() {
    
  const [inputValue, setInputValue] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const postMessage = () => {
    if (inputValue.trim() !== '') {
    setUserMessage(inputValue);
    setInputValue('');
    }
  };

  return (
    <MessageContext.Provider
      value={{
        message: userMessage,
        changeMessage: setUserMessage,
      }}
    >
      <BlogManagementWrapper>
        <Input
          name="message"
          id="message_id"
          placeholder="Enter your message"
          value={inputValue}
          onChange={changeInputValue}
        />
        <Button name="POST" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </MessageContext.Provider>
  );
}

export default BlogManagement;
