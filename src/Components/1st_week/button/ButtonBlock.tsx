import React, {useState} from 'react';

const ButtonBlock = () => {
    let [a, setA] = useState(0)

const onClickHandler = () => {
    setA(++a)
    console.log(a)
}
const onClickNuller = () => {
    setA(a=0)
    console.log(a)
}

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+1</button>
            <button onClick={onClickNuller}>0</button>
        </div>
    );
};

export default ButtonBlock;