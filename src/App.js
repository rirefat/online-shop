import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navabr from './components/Navbar/Navabr';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to our Online Shop</h1>
      <Navabr></Navabr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;