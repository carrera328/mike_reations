import React, { Fragment } from 'react';
import Menu from './Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from '../components/Header';
import branding from '../images/mikereations_white_logo.svg';

import '../styles/Home.css';
import '../App.css';

function Home({displayMessage}) {
    displayMessage = displayMessage || 'Sweets, Treats and Delicious Eats';
    return (
        <Fragment>
           <Header showlogo = {false}/>
                <img alt="mikereations logo" className = 'main-logo' src={branding}/>
            <h2 className = 'lobster home-message'>{displayMessage}</h2>
            <button className = 'lobster unattched-btn'>
                <Link to='/menu' className='route-link' >Order Online</Link>
            </button>            
        </Fragment>
    )
}

export default Home
