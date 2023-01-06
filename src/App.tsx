import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {NewComponent} from "./Components/NewComponent";
import {Button} from "./Components/Button";
import {log} from "util";
import {FilterMoney} from "./Components/FilterMoney";

export type FilterType = 'all' | 'dollar' | 'ruble'

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}
function App() {

    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 54, number: ' v1234567890'},
    ])

    let [button, setButton] = useState<FilterType>('all')
    const filterByBanknote = (banknote:FilterType) => {
        setButton(button = banknote)
    }

    let currentMoney = money

    if (button === 'ruble') {
        currentMoney = money.filter(el => el.banknote === 'ruble')
    }
    if (button === 'dollar') {
        currentMoney = money.filter(el => el.banknote === 'dollar')
    }

    return (
        <>
            <FilterMoney currentMoney={currentMoney} filter={filterByBanknote}/>
        </>
    );
}

export default App;

