import React, { useState, useEffect } from 'react';

import { useStyles } from './Product.styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IProduct from '../../models/ProductModel';
import ISeller from '../../models/SellerModel';
import { apiSellerOnly } from '../../apiService';

export default function Product(props: {
  product: IProduct;
  addOrRemove: string;
  actionFunction: (prod: IProduct) => void;
}) {
  const classes = useStyles();

  const [seller, setSeller] = useState({} as ISeller);
  useEffect(() => {
    apiSellerOnly(props.product.seller.id)
      .then(res => res.json())
      .then(res => {
        if (res.seller) {
          setSeller(res.seller);
        }
      });
  }, [props.product.seller.id]);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.thumbnail}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography className={classes.notOverflow}>
            {props.product.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.product.price}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {seller.nickname}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='large'
          color='primary'
          onClick={event => {
            props.actionFunction(props.product);
          }}
        >
          {props.addOrRemove}
        </Button>
      </CardActions>
    </Card>
  );
}
