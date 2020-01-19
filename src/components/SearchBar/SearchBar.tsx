import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          ></IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            Busca tus regalos en Mercado Libre{' '}
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
                root: classes.inputRoot,
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
