import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import EmptyCart from './components/EmptyCart'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={Products} />
      <Route exact path="/products/:id" Component={ProductItemDetails} />
      <Route exact path="/cart" Component={EmptyCart} />
    </Routes>
  </Router>
)

export default App

