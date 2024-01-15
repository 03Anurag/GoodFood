import React from 'react';
import { useContext ,forwardRef } from 'react';
import CartContext from '../CartContextProvider';
import Button from './Button';

const Modal = forwardRef(function Modal({onClose , onReset} ,ref){
    const cartCtx = useContext(CartContext)

    const totalPrice = cartCtx.items.reduce((num , item) => {
        return num + (item.quantity * item.price)
    },0)

    function handleAdd(item){
        cartCtx.addItem(item);
    }

    function handleRemove(item){
        cartCtx.removeItem(item)
    }
  return (
    <>
        <dialog className='modal' ref={ref}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <li className='cart-item' key={item.id}>
                        <p><strong> {item.name} </strong> - {item.quantity} x {item.price}</p>
                        <p className='cart-item-actions'>
                            <button onClick={() => {handleRemove(item)}}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => {handleAdd(item)}}>+</button>
                        </p>
                    </li>
                ))}
            </ul>
            <p className='cart-total'>Rs.{totalPrice.toFixed(2)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={onClose}>Close</Button>
                <Button onClick={onReset}>Checkout</Button>
            </p>
        </dialog>
    </>
  )
})

export default Modal