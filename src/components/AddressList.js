import React from 'react'
import '../styles/Location.css';
import {addresses} from '../components/db';
import '../styles/Forms.css';

function AddressList() {
    console.log(addresses);
    return (
        <div className='address-container'>
            <div className='address-item'>
                <input className='address-input' type='text' placeholder='' />
            </div>
            {addresses.map(address => (
                <div className='address-item'>
                   
                </div>
            )
            )}

        </div>
    )
}

export default AddressList
