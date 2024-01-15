import React from 'react';
import Button from './Button';
import { useContext } from 'react';
import CartContext from '../CartContextProvider';

const Mealitem = ({meal}) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealItem(){
    cartCtx.addItem(meal);
  }
  return (
    <li className='meal-item'>
        <article>
            <img src={meal.image} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>Rs.{meal.price}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>

            <p className='meal-item-actions'>
                <Button onClick = {handleAddMealItem}>Add to Cart</Button>
            </p>
        </article>
    </li>
  )
}

export default Mealitem