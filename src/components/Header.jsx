import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import InfoIcon from '@material-ui/icons/Info';

const Header = () => {

  const { itemsCount } = useContext(ShoppingCartContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">

        <div id="navbarColor01">
          <ul className="navbar-nav ">

            <li className="nav-item">
              <Link to='/' className="nav-link"><HomeIcon />Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/shop' className="nav-link"><ShopIcon />Shop</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link"><InfoIcon />Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/cart' className="nav-link"><ShoppingCartIcon />Cart ({itemsCount})</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;