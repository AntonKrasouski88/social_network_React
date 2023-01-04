import React from 'react';
import styleMessage from "./Message.module.css";

type MessagePropsType = {
    id: number,
    message: string,
    className?: string,
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={props.id % 2 !== 0 ? styleMessage.message : styleMessage.messagesFriend}>
            {props.message}
        </div>
    );
};

export default Message;