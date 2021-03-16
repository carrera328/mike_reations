import React, {Fragment, useState} from 'react';
import {initialToggleState} from '../util/helpers'
import '../styles/ToggleMenu.css';
import '../App.css';

function ToggleMenu(props) {
    const picklistValues = props.picklistVals;
    const toggle = props.handler;
    
    // const [state, setState] = useState(picklistValues);
   const message = props.message || 'Customize item';
    

    return (
       <div className='toggle-container'>
           <div className='toggle-head'>
            <h1 className='toggle-message helvetica'>{message}</h1>
            <i className="fal fa-chevron-circle-down"></i>
           </div>
           <div className="toggle-body">
               {picklistValues.map((e, i) => {
                return (
                <div key={e.id} className='checkbox-container'>
                    <label className="container">
                        <input onClick={toggle} type="checkbox" id={e.id} />
                        <span className="checkmark"></span>
                    </label>
                    <h3 className='helvetica checkbox-label'>{e.name}</h3>
                </div>
                );  
            })}
           </div>
       </div> 
    )
}

export default ToggleMenu
