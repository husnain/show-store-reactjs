import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductContext'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import Button from '@material-ui/core/Button';

const ProductDetails = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState('')
  const { products } = useContext(ProductsContext)
  const { addProduct, increment, shopCartItems } = useContext(ShoppingCartContext)

  const itemInCart = product => {

    return shopCartItems.find(item => item.id === product.id)
  }


  useEffect(() => {
    const selectedProduct = products.find(item => item.slug === productId);
    setProduct(selectedProduct);
  }, [products, productId]);


  return (<div>
      <h2>Product details page</h2>
    { product &&
          <div className="card card-body col-md-3 col-sm-3">
            <h2>{product.name}</h2>
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
            src={product.imgUrl} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">${(product.price)}</h3>

            <div className="text-right">

                {
                  !itemInCart(product) &&
                  <Button variant="contained" color="primary" onClick={() => addProduct(product)}>
                    Add to cart
                  </Button>
                }

                {
                  itemInCart(product) &&
                  <Button variant="contained" color="primary" onClick={() => increment(product)}>
                      Add more
                    </Button>
                }

            </div>
          </div>
            }
  </div>)
}

export default ProductDetails