import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/index"
import Footer from './components/Footer/index'
import Home from "./pages/Home/index"
import Cart from "./pages/Cart/index"
import Liked from "./pages/Liked/index"

function App() {
  return(
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App