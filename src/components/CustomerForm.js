import React from 'react'
import '../styles/Forms.css';
function CustomerForm() {
    return (
        <div className='form-container'>
            <div className='customer-input first-name'>
                <label className='form-label'>
                    First Name
                </label>
                <input className='text-input' type='text'/>
            </div>
            <div className='customer-input last-name'>
                <label className='form-label'>
                    Last Name
                </label>
                <input className='text-input' type='text'/>
            </div>
            <div className='customer-input phone-number'>
                <label className='form-label'>
                    Phone Number
                </label>
                <input className='text-input' type='tel'/>
            </div>
            <div className='customer-input email'>
                <label className='form-label'>
                    Email
                </label>
                <input className='text-input' type='email'/>
            </div>
        </div>
    )
}

export default CustomerForm
