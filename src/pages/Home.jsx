import React from 'react';
import Main from '../components/Main';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Home = () => {

  return (
    <Main title="Welcome to Shoe Store" description="Shoe Store Shopping Cart" >
      <div className="text-center mt-5">
        <h1>Shoe Store</h1>
        <p>Welcome to Husnain Ahmed's Shoe Store</p>
      </div>
      <div className="text-center mb-20">
        <Button variant="contained" color="secondary">
          <Link to="shop">Shop Now</Link>
        </Button>
      </div>
      <div className="text-center  mt-5 mb-5">
        Home Page
      </div>
    </Main>
  )
}

export default Home
