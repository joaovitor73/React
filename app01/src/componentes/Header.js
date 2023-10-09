import React from 'react';
import Barcelona from './imgs/barcelona.png'
export default function Header(){
    return(
        <header>
            <img src={Barcelona} alt="Barcelona" width="100"/>
            <h1>Barcelona</h1>
        </header>
    )
}