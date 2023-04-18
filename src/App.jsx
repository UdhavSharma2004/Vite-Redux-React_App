import './App.css'
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import store from './Store/store';
import Product from './Pages/Product';
import Gateway from './Pages/Gateway';

import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Gateway />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
