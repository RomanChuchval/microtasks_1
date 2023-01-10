import React, {useState} from 'react';
import {FilterMoney} from "./FilterMoney";
import {FilterType, MoneyType} from "./FilterMoney";

const Filter = () => {
    const [money, setMoney] = useState<MoneyType[]>([
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
            <FilterMoney Money={currentMoney} filter={filterByBanknote}/>
        </>
    );
};

export default Filter;