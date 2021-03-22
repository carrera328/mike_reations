import React, { Fragment } from 'react';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import AddressList from '../components/AddressList';
import Footer from '../components/Footer';

function Location() {
    return (
        <div className='location-container'>
            <Header showLogo={true} />
            <HeadNav header='Sal' />
            <AddressList />
            <Footer url='/' message='sal'/>
        </div>
    )
}

export default Location
