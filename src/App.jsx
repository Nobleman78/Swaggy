import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Navbar from './components/Navbar'
import Dashboard from './Pages/Dashboard'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Salad from './components/Category/Salad'
import FishFinger from './components/Category/FishFinger'
import Noodles from './components/Category/Noodles'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/our-menu" element={<Menu />}>
         
          <Route path="salad" element={<Salad />} />
          <Route path="fish-finger" element={<FishFinger />} />
          <Route path="noodles" element={<Noodles />} />
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/our-shop' element={<Shop />}></Route>
        <Route path='/my-cart' element={<Cart />}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
