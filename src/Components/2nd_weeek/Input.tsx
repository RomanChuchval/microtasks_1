import React, {ChangeEvent} from 'react';

type InputPropsType = {
    text : string
    setText: (text: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setText(event.currentTarget.value)
    }

    return (
        <input value={props.text} onChange={onChangeInputHandler}/>
    )
};

