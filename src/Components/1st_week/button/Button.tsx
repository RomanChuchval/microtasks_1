import React from 'react';


type ButtonType = {
    name: string
}
export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        console.log('Click')
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

