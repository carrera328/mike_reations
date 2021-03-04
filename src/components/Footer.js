import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '../App.css';

function Footer() {
    
    return (
        <div className='sticky-shell'>
             <div className ='footer-container border-top'>
                <button className = 'lobster attached-btn purple-btn'>
                    <Link to='/menu' className='route-link' >Add to cart</Link>
                </button>  
                
            </div>        
        </div>
    )
}

export default Footer
