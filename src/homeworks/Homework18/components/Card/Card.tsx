import Message from "../Message/Message";
import { CardInfo, CardWrapper } from "./styles";

function Card () {
    return (
        <CardWrapper>
            <Message />
            <CardInfo>
                Stanislav Vidulin
            </CardInfo>
        </CardWrapper>
    )
}

export default Card;