//Quando for criar as pastas então letra minuscula
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './home'
import Produtos from './produtos'
import Oferta from './oferta'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/oferta' element={<Oferta/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



