import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseEffect from './component/UseEffect';
import Home from './component/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
    {/* <UseEffect/> */}
  </React.StrictMode>
);


// webhuks => useState => Component ichidagi statik malumotlarni ozgartirish uchun ishlatiladi 
// statik har qanday tovar bo'lsa ham bor bo'ladi 
// dinamik  -> tovar turiga qarab o'zgaradi 

// rcc - > stateFull components 
// rfc - stateLess components
// state - holat - состояние

// 16,8 - useState -functional component ichida 