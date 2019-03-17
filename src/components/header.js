import React from 'react';
import './app.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

const NavButton = props => {
  const navButtonStyle = { width: '7em', 'textTransform': 'lowercase', border: '2px solid white', margin: '-1px', color:'white', 'borderRadius': props.borderRadius }
  return(
    <div className='navbutton'>
      <Grid item>
        <Button
            component={Link} to={props.relativeLink}
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
          <NavButton borderRadius='3px 0 0 0' relativeLink='/about'>about</NavButton>
          <NavButton borderRadius='0 3px 0 0' relativeLink='/projects'>projects</NavButton>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <NavButton borderRadius='0 0 0 3px' relativeLink='/blog'>blog</NavButton>
          <NavButton borderRadius='0 0 3px 0' relativeLink='/contact'>contact</NavButton>
        </Grid>
      </Grid>
    </div>
  </div>

export default Header;