import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchBar.styles';
import { apiRequest } from '../../apiService';
import { useDispatch } from 'react-redux';

function SearchBar() {
  const [newText, onChangeText] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar className={classes.toolbar}>
          <Button href='http://localhost:3000/MyList'>My List</Button>

          <Typography className={classes.title}>
            Give-it App: Make and share your gift list
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              onChange={event => {
                const newText = event.target.value;
                onChangeText(newText);
              }}
              onKeyPress={event => {
                if (event.key === 'Enter' && newText) {
                  onChangeText(newText);
                  dispatch(apiRequest(newText));
                }
              }}
              classes={{
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default SearchBar;
