import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/HeadNav.css';
import '../App.css';
import {useHistory} from 'react-router-dom';

function HeadNav(props) {
    const header = props.header || 'Item';
    const history = useHistory();
    const handleClick = (e) => {
        history.goBack();
    }

    return (
        <div className="container">
                <i onClick={handleClick} className="fal fa-arrow-left"></i>
            <h2 className="head helvetica">{header}</h2>
        </div>
    )
}

export default HeadNav
