import React from 'react';
import styleMessage from "./Message.module.css";

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styleMessage.message}>
            {props.message}
        </div>
    );
};

export default Message;