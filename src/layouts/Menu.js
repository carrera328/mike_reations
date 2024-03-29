import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
import {data} from '../components/db';
import '../App.css';
import '../styles/Menu.css'

function Menu(props) {
    const heading = props.heading || 'Products';
    return (
       <Fragment>
           <Header showLogo={true}/>
           <div className= 'products-container'>
            <h1 className='helvetica menu-head'>{heading}</h1>
            {data.map(product => (
                <Link className='route-link' to={`sub-menu/${product.name}`}>
                <Product 
                name={product.name} 
                desc={product.description} 
                price={product.price.toFixed(2)}/> 
                </Link>
            ))}
           </div>
           {
              props.continue && 
                    <Fragment>
                        <Footer url='/customer-info' reference='mainMenu' message='Continue'/>
                        <div className='ghost'></div>
                    </Fragment>
           }    
       </Fragment>
    )
}



export default Menu

