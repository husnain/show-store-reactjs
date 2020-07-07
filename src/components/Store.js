import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      price: "100.00",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270",
      price: "60.00",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "nike-blazer-low-le": {
        name: "Nike Blazer Low LE",
        price: "70.00",
        img:
            "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e5nvvixor3rhl1v2hy9d/chaussure-blazer-low-le-pour-9fvvQk.jpg"
    },
    "nike-bs-blazer-low-gt": {
     name: "Nike BS blazer Low GT",
     price: "56.00",
     img:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a3pitn8kne6b1lddmoac/chaussure-de-skateboard-sb-blazer-low-gt-L8LpKp.jpg"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      price: "87.00",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };

  function addToCart()
  {
    console.log(this);
  }
export const Store = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Store View
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Object.entries(shoes).map(([slug, {name, img, price}]) => (
              <Grid item key={slug} xs={12} sm={6} md={4}>
                <Card className={classes.shoe}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title={name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    
                    <Typography gutterBottom variant="body2">
                    ${price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <RouteLink to={`/product/${slug}`}>
                        View
                      </RouteLink>

                    <Button size="small" color="primary" onClick={addToCart} defaultValue={slug}>
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Divider />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Husnain Ahmed's custom footer
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}