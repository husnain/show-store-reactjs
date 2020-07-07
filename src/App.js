import React from 'react';
import {AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Store } from './components/Store';
import { SingleProduct } from './components/SingleProduct';
import { Cart } from './components/Cart';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="relative">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </IconButton>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/products">Store</Link>
            </Button>
            <Button>
              <Link to="/about">About</Link>
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Store />} />
          <Route path="/product/:slug" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
    
      
  );
}

export default App;
