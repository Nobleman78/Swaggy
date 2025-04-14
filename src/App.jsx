import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/Footer'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
