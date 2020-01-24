import React, { useState, useEffect } from "react";

import { useStyles } from "./Product.styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IProduct from "../../models/ProductModel";
import ISeller from "../../models/SellerModel";
import { apiSellerOnly } from "../../apiService";
import { useDispatch } from "react-redux";
import { AddToMyList, RemoveFromMyList } from "../../actions/myListAction";

export default function Product(props: {
  product: IProduct;
  addOrRemove: string;
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

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
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.notOverflow}>
            {props.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {seller.nickname}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          color="primary"
          onClick={event => {
            if (props.product.id === "Remove from your gift list") {
              dispatch(RemoveFromMyList(props.product.id));
            } else {
              dispatch(AddToMyList(props.product.id));
            }
          }}
        >
          {props.addOrRemove}
        </Button>
      </CardActions>
    </Card>
  );
}
