import React from 'react';

type NewComponentType = {
    //students:Array<StudentsInfoType>
    students: StudentsInfoType[]
}

type StudentsInfoType = {
    id: number;
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <ul>
                {props.students.map((el, index) => {
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
