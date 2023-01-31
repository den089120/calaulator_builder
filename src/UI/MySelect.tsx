import React, {FC} from 'react';
import {selects} from '../constants/calcConstants'

interface mySel {
    selectInput: (e:any)=> void;
}

const MySelect:FC<mySel> = ({selectInput}) => {

    const keys: string[] = Object.keys(selects)

    return (
        <select className="form-select" aria-label="Default select example" onSelect={selectInput}>
            <option selected disabled>Выберите какой у вас объект</option>
            { keys.map((el)=> <option value={selects[el]} >{el}</option>)}
        </select>
    );
};

export default MySelect;