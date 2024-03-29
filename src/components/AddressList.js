import React from 'react'
import '../styles/Location.css';
import {addresses} from '../components/db';
import '../styles/Forms.css';
import '../App.css';

function AddressList(props) {
    console.log(addresses);
    console.log(props);

    return (
        <div className='address-container' >
            <div className='address-item'>
                <input id='address-input' onKeyUp={props.onkeyup} className='address-input' type='text' placeholder='Enter a new address' /> 
            </div>
            <div onClick={props.onClick} className='address-item'>
                <i class="fas fa-location-arrow"></i> 
                <div className='address-details helvetica'>
                    <h3>Use Location</h3>
                    <p>2255 Starla Blair Ave. Indianapolis, IN, 45552 </p>
                </div>
    
            </div>
        </div>
    )
}

export default AddressList
