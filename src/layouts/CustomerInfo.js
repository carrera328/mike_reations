import React, {Fragment, useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import CustomerForm from '../components/CustomerForm';


function CustomerInfo() {
    return (
        <Fragment>
           <Header showLogo={true}/>
           <HeadNav header='Customer Details'/>
           <CustomerForm />
           <Footer url='/' message='Continue'/>
        </Fragment>
    )
}

export default CustomerInfo
