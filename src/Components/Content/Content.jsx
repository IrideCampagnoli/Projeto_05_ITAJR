import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SobreNos from '../../Views/SobreNos';
import Home from '../../Views/Home';
import Login from '../../Views/Login';

export default () => (
  <main className='Content'>
    <Routes>
      <Route path = '/about' element={<SobreNos/>}/>
      <Route path = '/login' element={<Login/>}/>
      <Route path = '/' element={<Home/>}/>
    </Routes>
  </main>
);