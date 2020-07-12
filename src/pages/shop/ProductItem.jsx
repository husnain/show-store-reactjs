import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const ProductItem = ({product}) => {

  const classes = useStyles();
  const { addProduct, increment, shopCartItems } = useContext(ShoppingCartContext)

  const itemInCart = product => {

    return shopCartItems.find(item => item.id === product.id)
  }



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imgUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained" onClick={() => addProduct(product)}>
          Add To Cart
        </Button>
        <Button variant="contained" color="primary">
          <Link to={`product/${product.slug}`} >
            View
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;