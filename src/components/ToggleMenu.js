import React, {Fragment, useState} from 'react';
import '../styles/ToggleMenu.css';

function ToggleMenu(props) {
    const [state, setstate] = useState(props.picklistVals);
    const picklistValues = props.picklistVals;
    const items = props.picklistVals;
    const message = props.message || 'Customize item';
    console.log(picklistValues);
    return (
       <div className='toggle-container'>
           <div className='toggle-head'>
            <h1 className='toggle-message helvetica'>{message}</h1>
            <i class="fa fa-chevron-circle-down"></i>
           </div>
            {picklistValues.map(e => <div>
                <input type='checkbox'/>{e.Name}</div>)}
       </div> 
    )
}

export default ToggleMenu
