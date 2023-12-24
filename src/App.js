// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Order from './components/Order';
import Address from './components/Address';
import ImageSlider from './components/ImageSlider';
import Home from './scenes/Home';
import Menu from './scenes/Menu';
import Search from './scenes/Search';
import Categories from './scenes/Categories';
import Category from './scenes/Category';
import Food from './scenes/Food';
import Email from './components/Email';
import { CartProvider } from './CartContext';
import { AuthProvider } from './components/AuthContext';




function App() {
  // const slides =[
  //   {url : cake1, title: 'cake1'},
  //   {url : cake2, title: 'cake2'},
  //   {url : cake3, title: 'cake3'}
  // ];

  // const containerstyle = {
  //   width: '500px',
  //   height: '280px',
  //   margin: '0px auto'
  // };

  return (
    <CartProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* main menu and single menu */}
          <Route path="/menu/:id" element={<Food />} />
          <Route path="/categories" element={<Categories />} />
          {/* main category and category type */}
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search/:search" element={<Search />} />
          {/* Add the following routes for authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="/address" element={<Address />} />
          <Route path="/imageslider" element={<ImageSlider />} />
          <Route path="/email" element={<Email />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
