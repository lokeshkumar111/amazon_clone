import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../loginPage/Login';
import CreateAccount from '../CreatAccount/CreateAccount';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Products from '../Products/Products';
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <HomeNavbar/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<CreateAccount/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>  
    </BrowserRouter>
  )
}

export default AllRoutes
