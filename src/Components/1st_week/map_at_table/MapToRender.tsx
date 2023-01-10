import React from 'react';

type NewComponentType = {
    //students:Array<StudentsInfoType>
    students?: StudentsInfoType[]
}

type StudentsInfoType = {
    id: number;
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <ul>
                {students.map((el, index) => {
                    return (
                        <li key={index}>name: {el.name}, age: {el.age}</li>
                    )
                })}
            </ul>
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {topCars.map((car, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};
