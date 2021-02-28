import React, { Fragment } from 'react';
import Header from '../components/Header';
import Product from '../components/Product'
import '../App.css';
import '../styles/Menu.css'


function Menu(props) {
    const heading = props.heading || 'Products';
    const desc = props.desc || 'Warm flaky, southern-style biscuits.';
    return (
       <Fragment>
           <Header showLogo={true}/>
           <div className= 'products-container'>
            <h1 className='helvetica menu-head'>{heading}</h1>
            <Product name='Chicken Wings' price={5.25}/>
            <Product name='Enchiladas' price={3.35}/>
           </div>
           
           
       </Fragment>
    )
}



export default Menu

