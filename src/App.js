import React from 'react';
import './App.css';
import Header from './Components/Header';
import Meals from './Components/Meals';
import { CartContextProvider } from './CartContextProvider';

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </>
  )
}

export default App