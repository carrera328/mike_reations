import React, {Fragment, useState} from 'react';
import {initialToggleState} from '../util/helpers'
import '../styles/ToggleMenu.css';
import '../App.css';

function ToggleMenu(props) {
    const picklistValues = props.picklistVals;
    //console.log(...picklistValues);

    const [values, setChosen] = useState(initialToggleState(picklistValues));
    

    const message = props.message || 'Customize item';
    
    const toggle = (e) => {
        let id = e.target.id;
        console.log(`${e.target.id} is : ${e.target.checked}`);
        setChosen(currentState => ({
            ...currentState,
            [e.target.id] : {name : picklistValues[e.target.id].name, chosen : !e.target.chosen}
        }))
    }
    console.log(values);

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
                    <label class="container">
                        <input onClick={toggle} type="checkbox" id={e.id} />
                        <span class="checkmark"></span>
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
