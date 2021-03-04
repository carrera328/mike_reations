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
            <h2 className="head helvetica">{header}</h2>
        </div>
    )
}

export default HeadNav
