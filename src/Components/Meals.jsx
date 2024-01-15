import React from 'react';
import { Data } from '../Data';
import Mealitem from './Mealitem';
const Meals = () => {
  return (
    <>
        <ul id='meals'>
            {Data.map((data) => (
                <Mealitem key={data.id} meal={data}/>
            ))}
        </ul>
    </>
  )
}

export default Meals