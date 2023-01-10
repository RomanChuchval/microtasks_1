import React, {useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

export type MessagesType = {
    message: string
}
export const MessageList = () => {

    let [messages, setMessages] = useState<Array<MessagesType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [text, setText] = useState<string>('')

    const changeMessagesList = (text: string) => {
        setMessages([{message: text}, ...messages])
    }
    const callbackButtonHandler = () => {
        changeMessagesList(text)
        setText('')
    }

    let messagesList = messages.map((m, index) => {
        return <div key={index}>{m.message}</div>
    })

    return (
        <div className={'App'}>
            <Input text={text} setText={setText}/>
            <Button name={'+'} callback={callbackButtonHandler}/>
            {messagesList}
        </div>
    );
};