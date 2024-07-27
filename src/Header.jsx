import React from 'react';
import logo from './image/logo.svg';

const Header=()=>{
    return(
        <>
            <div className='header'>
                <img src={logo} alt='logo' width='70' height='50' />
                <h1>Google keep</h1>
            </div>
        </>
    )
};

export default Header;