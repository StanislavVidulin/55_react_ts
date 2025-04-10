import { useContext } from "react";
import { MessageContainer, MessageWrapper } from "./styles";
import { MessageContext } from "../BlogManagement/BlogManagement";
import Button from "../../../../components/Button/Button";

function Message () {

    const {message, changeMessage} = useContext(MessageContext);

    const deleteMessage = () => {
        changeMessage('');
    }

    return (
        <MessageWrapper>
            <MessageContainer>
                {message}
            </MessageContainer>
            {message && <Button name="Delete Post" onClick={deleteMessage} danger/>}
        </MessageWrapper>
    )
}

export default Message;