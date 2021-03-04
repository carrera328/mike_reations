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
            <i class="fal fa-chevron-circle-down"></i>
           </div>
           <div class="toggle-body">
               {picklistValues.map((e, i) => {
                return (
                <div className='checkbox-container'>
                    <i class="far fa-square-full"></i>
                    <h3 className='helvetica checkbox-label'>{e.Name}</h3>
                </div>
                );
                
            })}
           </div>
       </div> 
    )
}

export default ToggleMenu
