import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/HeadNav.css';
import '../App.css';

function HeadNav(props) {
    const header = props.header || 'Item';

    return (
        <div className="container">
            <Link className='route-link' to='/menu'>
                <i className="fal fa-arrow-left"></i>
            </Link>
            <h1 className="head helvetica">{header}</h1>
        </div>
    )
}

export default HeadNav
