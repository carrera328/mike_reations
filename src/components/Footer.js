import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '../App.css';

function Footer(props) {
    const message = props.message || 'Add to cart';
    const reference = props.reference || 'default';
    const {url} = props;

    console.log(reference);
    return (
        <div className='sticky-shell'>
             <div className = {reference === 'default' ? 'footer-container border-top' : 'footer-container main-menu border-top'}>
                <button onClick={props.handler} className='lobster attached-btn purple-btn'>
                    <Link to={url} className='route-link' >{message}</Link>
                </button>             
            </div>        
        </div>
    )
}

export default Footer
