import React from 'react'
import Main from '../../components/Main'
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Shop = () => {

  let navigate = useNavigate();

  function handleClick() {
    navigate('/')
  }

  return (
    <Main title="Shop Now" description="Store page" >
      <div>
        <div className="text-center mt-5 mb-5">
          <h1>Shoe Store</h1>
          <Button onClick={handleClick} variant="contained" color="secondary" >Home</Button>
        </div>
        <Outlet />
      </div>
    </Main>
   );
}

export default Shop;