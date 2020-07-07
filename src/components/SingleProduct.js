import React from 'react'
import { useParams } from 'react-router-dom';
import {
    Box, 
    CssBaseline, 
    Card, 
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Divider
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export const SingleProduct = () => {
    const shoes = {
        "air-jordan-3-valor-blue": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          name: "JORDAN MARS 270",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "nike-blazer-low-le": {
            name: "Nike Blazer Low LE",
            img:
                "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e5nvvixor3rhl1v2hy9d/chaussure-blazer-low-le-pour-9fvvQk.jpg"
        },
        "nike-bs-blazer-low-gt": {
         name: "Nike BS blazer Low GT",
         img:
            "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a3pitn8kne6b1lddmoac/chaussure-de-skateboard-sb-blazer-low-gt-L8LpKp.jpg"
        },
        "air-jordan-1-zoom-racer-blue": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    };

    const { slug } = useParams();
    const shoe = shoes[slug];

    console.log("slug: ", slug)
    
    const classes = useStyles();
        return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
           <Box>
                <img src={shoe.img} width="300px" alt={shoe.name}/>
                <Card className={classes.shoe}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={shoe.img}
                        title={shoe.name}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {shoe.name}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Button size="small" color="primary">
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
            </Box>
          </div>
          <Divider />
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
        );
}
