import React, {Fragment, useState} from 'react';
import Header from '../components/Header';
import HeadNav from '../components/HeadNav';
import ToggleMenu from '../components/ToggleMenu';
import Footer from '../components/Footer';
import {turnIntoArray} from '../util/helpers';
import '../App.css';

function SubMenu(props) {
    const header = props.header || 'Item';
    const picklistVals = props.picklistVals;
    const [state, setState] = useState(picklistVals);
    const toggle = (e) => {
        setState(previousState => ({
            ...state,
            [e.target.id] : {...state[`${e.target.id}`], chosen : !previousState[`${e.target.id}`].chosen}
        }));
        
    }

    const handleClick = (e) => {
        props.addCart({name : props.header, picklistValues : state});
    }
    
    return (
        <Fragment>
            <Header showLogo={true}/>
            <HeadNav header={header}  />
            <ToggleMenu message='Customize your meal' picklistVals={picklistVals} handler={toggle}/>
            <Footer url='/menu' handler={handleClick} />
        </Fragment>
    )
}

export default SubMenu
