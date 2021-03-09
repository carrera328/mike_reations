import React, { Fragment, useState } from 'react'
import '../App.css';
import logo from '../images/mikereations_black_logo.png';
import '../styles/Header.css';


import { Link } from "react-router-dom";


export default function Header({message, showLogo}) {
    message = message || 'Mikereations';
    showLogo = showLogo || false;
    
    return (
            <Fragment>
                <div className="nav-bar">
                    {showLogo ? 
                    <Fragment>
                        <img src={logo}/>
                        <h2 className="lobster nav-bar-logo">
                            <Link to='/' className='route-link'>{message}</Link>
                            </h2>
                    </Fragment>
                    :
                    <Fragment>
                        <h2 className="lobster nav-bar-no-logo">{message}</h2>
                    </Fragment>
                }
                   
                </div>  
            </Fragment>
    )
}
