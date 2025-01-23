import './App.css'
// import MainPage from './components/main-page/main-page'
// import Login from './components/login/login'
// import Registr from './components/registr/registr.'
// import ProductPage from './components/product-page/product-page'
// import Basket from './components/basket/basket'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const LoginPage = lazy(() => import('./components/login/login'))
const MainPage = lazy(() => import('./components/main-page/main-page'))
const Details = lazy(() => import('./components/product-page/product-page'))
const Basket = lazy(() => import('./components/basket/basket'))
const Registr = lazy(() => import('./components/registr/registr.'))



function App() {

  return (
    <>
    <Suspense fallback={<h1>Loading</h1>}>

    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/registr' element={<Registr/>} />
      <Route path='/basket' element={<Basket/>} />
      <Route path='/productPage/:id' element={<Details/>} />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
