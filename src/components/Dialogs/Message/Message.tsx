import React from 'react';
import styleMessage from "./Message.module.css";

type MessageTypeProps = {
    message: string
}

const Message = (props: MessageTypeProps) => {
    return (
        <div className={styleMessage.message}>
            {props.message}
        </div>
    );
};

export default Message;