import React from 'react';
import { createContext , useReducer } from 'react';


const CartContext = createContext();

const initialState = {
  items: []
}

function cartReducer(state , action) {
  if(action.type === 'ADD_ITEM'){
    const index = state.items.findIndex((item) => item.id === action.item.id);
    const updatedItems = [...state.items]

    if(index > -1){
      const updateItem = {
        ...state.items[index],
        quantity: state.items[index].quantity + 1
      }

      updatedItems[index] = updateItem;
    }
    else{
      updatedItems.push({...action.item , quantity: 1})
    }
    return {...state , items: updatedItems}
  }
  if(action.type === 'REMOVE_ITEM'){
    const index = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[index];
    const updatedItems = [...state.items];

    if(existingItem.quantity === 1){
      updatedItems.splice(index , 1)
    }
    else{
      const updateItem = {
        ...state.items[index],
        quantity: state.items[index].quantity - 1
      }
      updatedItems[index] = updateItem;
    }
    return {...state , items: updatedItems}
  }
  if(action.type === 'RESET_ALL'){
    return {...state , items:[]}
  }
}

export const CartContextProvider = ({children}) => {
  const [state , dispatch] = useReducer(cartReducer , initialState);

  function addItem(item){
    dispatch({type:'ADD_ITEM' , item})
  }

  function removeItem(item){
    dispatch({type: 'REMOVE_ITEM' , item})
  }

  function resetAll(){
    dispatch({type: 'RESET_ALL'})
  }

  const cartContext = {
    items : state.items,
    addItem,
    removeItem,
    resetAll
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartContext