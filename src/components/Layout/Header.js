import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Comidas React</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Mesa cheia de comida deliciosa!' /> 
        </div>

</Fragment>
};


export default Header