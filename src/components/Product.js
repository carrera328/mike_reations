import React, { Fragment } from 'react';
import {formatDesc} from '../util/helpers';
import '../styles/Product.css';
import plc from '../images/mikereations_white_logo.png';

export function Product(props) {
    const name = props.name || 'Test';
    const desc = props.desc || 'Warm flaky, southern-style biscuits.';
    const price = props.price || 2.25
    console.log(formatDesc(desc, 58));
    return (
        <Fragment>
            <div className='super'>
                <div className = 'product'>
                    <div className='main-col'>
                        <h1 className='helvetica product-header'>
                            {name}
                        </h1>
                        <div className='desc-container'>
                            <h1 className='helvetica product-desc'>
                                {formatDesc(desc,45)}
                            </h1>
                        </div>
                    </div>
                    <div className='img-container'>
                        <img className='plc-img' src={plc}/>
                    </div>  
                </div>
                <h1 className='helvetica product-price'>
                    {`$${price}`}
                </h1>
        </div>
     </Fragment>
    )
}

export default Product;