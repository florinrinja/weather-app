import React from 'react';

import classes from './Header.module.css';
import Logo from '../Logo/Logo';

const header = (props) => {
    return(
        <header className={`row ${classes.Header}`} style={{backgroundColor: props.color}}>
            <Logo colorScheme={'light'} location={props.location}/>
        </header>
    ); 
}

export default header;