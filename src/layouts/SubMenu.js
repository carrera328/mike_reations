import React, {Fragment, useState} from 'react';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import ToggleMenu from '../components/ToggleMenu';
import Footer from '../components/Footer';
import '../App.css';

function SubMenu(props) {
    // header
    // picklist values
    // price
    const header = props.header || 'Item';
    const picklistVals = props.picklistVals;
    console.log(picklistVals);
    return (
        <Fragment>
            <Header showLogo={true}/>
            <HeadNav header={header} />
            <ToggleMenu message='Customize Your Meal' picklistVals={picklistVals} />
            <Footer />
        </Fragment>
    )
}

export default SubMenu
