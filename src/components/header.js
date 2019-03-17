import React from 'react';
import './app.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

const NavButton = props => {
  const navButtonStyle = { width: '7em', 'textTransform': 'lowercase', border: '1px solid #7a7b7c', margin: '-.5px', color:'white', 'borderRadius': '0 0 0 0' }
  return(
    <div className='navbutton'>
      <Grid item>
        <Button
            component={Link} to={props.relativeLink} partiallyActive={true}
            variant="outlined"
            size="medium"
            style={ navButtonStyle }
            activeStyle={{'background-color': 'red'}}
          >
          {props.children}
        </Button> 
      </Grid>
    </div>)}

const Header = () => 
  <div className='sidenav'>
    <div className='navgrid'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <NavButton relativeLink='/about'>about</NavButton>
          <NavButton relativeLink='/projects'>projects</NavButton>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <NavButton relativeLink='/blog'>blog</NavButton>
          <NavButton relativeLink='/contact'>contact</NavButton>
        </Grid>
      </Grid>
    </div>
  </div>

export default Header;