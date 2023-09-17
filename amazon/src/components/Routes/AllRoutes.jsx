import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../loginPage/Login';
import CreateAccount from '../CreatAccount/CreateAccount';
const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<CreateAccount/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
