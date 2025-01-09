import './App.css'
import MainPage from './components/main-page/main-page'
import Login from './components/login/login'
import Registr from './components/registr/registr.'
import ProductPage from './components/product-page/product-page'
import Basket from './components/basket/basket'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registr' element={<Registr/>} />
      <Route path='/basket' element={<Basket/>} />
      <Route path='/productPage' element={<ProductPage/>} />
    </Routes>
    </>
  )
}

export default App
