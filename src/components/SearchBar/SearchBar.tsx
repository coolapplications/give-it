import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchBar.styles";
import { apiRequest } from "../../apiService";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import RedeemIcon from "@material-ui/icons/Redeem";
import Badge from "@material-ui/core/Badge";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function SearchBar(props: { counter: number }) {
  const [newText, onChangeText] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Button
            component={Link}
            to="/gifts"
            variant="text"
            color="default"
            disableElevation
          >
            My gifts
          </Button>
          <div className={classes.sectionDesktop}>
            <IconButton component={Link} to="/home" color="inherit">
              <AccountBalanceIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={props.counter}>
                <RedeemIcon />
              </Badge>
            </IconButton>
          </div>
          <Typography className={classes.title}>
            Give-it App: Make and share your gift list
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={event => {
                const newText = event.target.value;
                onChangeText(newText);
              }}
              onKeyPress={event => {
                if (event.key === "Enter" && newText) {
                  onChangeText(newText);
                  dispatch(apiRequest(newText));
                  history.push("/home");
                }
              }}
              classes={{
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default SearchBar;
