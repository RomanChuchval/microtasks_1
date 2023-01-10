import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./Components/1st_week/Header_Body_Footer/Header";
import {Body} from "./Components/1st_week/Header_Body_Footer/Body";
import {Footer} from "./Components/1st_week/Header_Body_Footer/Footer";
import {NewComponent} from "./Components/1st_week/map_at_table/MapToRender";
import {Button} from "./Components/1st_week/button/Button";
import Filter from "./Components/1st_week/filter/Filter";
import ButtonBlock from "./Components/1st_week/button/ButtonBlock";
import {MessageList} from "./Components/2nd_weeek/MessageList";


function App() {

    return (
        <>
            {/*<div><Filter/></div>*/}
            {/*<div><Button name={'button'}/></div>*/}
            {/*<div><ButtonBlock/></div>*/}
            {/*<NewComponent />*/}
            <MessageList />
        </>
    )
}

export default App;

