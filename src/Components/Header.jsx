import React from 'react';
import logoImg from '../Assets/logo.jpg';
import Button from './Button';
import CartContext from '../CartContextProvider';
import { useContext , useRef } from 'react';
import Modal from './Modal';

const Header = () => {
  const dialog = useRef();
  const cartCtx = useContext(CartContext);

  const totalItem = cartCtx.items.reduce((num , item) => {
    return num + item.quantity;
  },0)

  function handleOpen(){
    dialog.current.showModal();
  }

  function handleClose(){
    dialog.current.close();
  }

  function handleReset(){
    cartCtx.resetAll();
    dialog.current.close();
  }

  return (
    <>
    <Modal ref={dialog} onClose={handleClose} onReset={handleReset}/>
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="Logo_Image" />
            <h1>GoodFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleOpen}>Cart({totalItem})</Button>
        </nav>
    </header>
    </>
  )
}

export default Header