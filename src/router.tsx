import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'

const Router = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sklep" element={<Shop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
