import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {NewComponent} from "./Components/NewComponent";
import {Button} from "./Components/Button";

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

    const button1Foo = (name: string, age:number, address:string) => {
        console.log(name, age, address)
    }
    const button2Foo = (name: string, age:number) => {
        console.log(name, age)
    }
    const button3Foo = () => {
        console.log('stupid button message')
    }

    return (
        <div className='App'>
            <Button name={'YouTubeChannel-1'} callBack={() => button1Foo('Roman', 28, 'live in Minsk')}/>
            <Button name={'YouTubeChannel-2'} callBack={() => button2Foo('Ivan', 30)}/>
            <Button name={'StupidButton'} callBack={button3Foo}/>

            {/*<button>My Youtube Channel#3</button>*/}
            {/*<button>My Youtube Channel#3</button>*/}

        </div>
    );
}

export default App;

{/*<NewComponent students={students}/>*/
}
{/*<Header titleForHeader={'NEW Header'}/>*/
}
{/*<Body titleForBody={'NEW Body'}/>*/
}
{/*<Footer titleForFooter={'NEW Footer'}/>*/
}