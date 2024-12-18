import React from 'react'
import './App.css'
import Landingpage from './pages/Landingpage'
import {Routes,Route} from 'react-router-dom'
import AllProducts from './pages/AllProducts'
import OfferForm from './forms/OfferForm'
const App = () => {
  return (
    <div>

     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/allproducts' element={<AllProducts/>}/>
      <Route path='/offerform' element={<OfferForm/>}/>
     </Routes>
    </div>
  )
}

export default App