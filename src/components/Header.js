import React from 'react';
import logo from '../../src/assests/images/logo.png';
import classes from './Header.module.css';
const Header = () => {
    const routes = ["trolley","cement","bricks","blocks","construction", "mud flip","tools","stones","curation"]
  return (
    <div className={classes.MainHeaderContainer}>
        <div className={classes.HeaderLogoWrapper}>
            <img src={logo} alt="logo" width={86}/>
        </div>
        <div className={classes.NavigationWrapper}>
            <div className={classes.NavigationRoutesDiv}>
                {
                    routes.map((route,index)=><span style={{color:index===0 && 'blue', borderBottom:index===0 && '2px solid blue'}} key={index}>{route.toUpperCase()}</span>)
                }
            </div>
        </div>
    </div>
  )
}

export default Header