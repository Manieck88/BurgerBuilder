import React from 'react';

import classes from './MenuButton.css'

const menuButton = (props) => (
    <div className={classes.MenuButton}
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div> 
)

export default menuButton;