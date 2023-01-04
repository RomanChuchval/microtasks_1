import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";

function App() {
    return (
        <>
            <Header titleForHeader={'NEW Header'}/>
            <Body titleForBody={'NEW Body'}/>
            <Footer titleForFooter={'NEW Footer'}/>
        </>
    );
}

export default App;
