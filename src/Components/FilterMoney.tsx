import React from 'react';
import {FilterType, MoneyType} from "../App";

type FilterMoneyType = {
    currentMoney:Array<MoneyType>
    filter: (params: FilterType) => void
}

export const FilterMoney = (props: FilterMoneyType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((element) => {
                    return (
                        <li key={element.number}>
                            <span> {element.banknote} </span>
                            <span> {element.nominal} </span>
                            <span> {element.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => props.filter('ruble')}>Rubles</button>
                <button onClick={() => props.filter('dollar')}>Dollars</button>
                <button onClick={() => props.filter('all')}>All</button>
            </div>
        </>
    );
};

