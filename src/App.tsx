import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {NewComponent} from "./Components/NewComponent";

function App() {

    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, Im Roma')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hi, Im Lera')
    // }

    const onClickHandler = (name:string) => {
        console.log(`Hello it's ${name}`)
    }

    return (
            <div className='App'>
                <button onClick={() =>onClickHandler('Vasya')}>My Youtube Channel#2</button>
                <button onClick={() =>onClickHandler('Roman')}>My Youtube Channel#3</button>

            </div>
    );
}

export default App;

{/*<NewComponent students={students}/>*/}
{/*<Header titleForHeader={'NEW Header'}/>*/}
{/*<Body titleForBody={'NEW Body'}/>*/}
{/*<Footer titleForFooter={'NEW Footer'}/>*/}