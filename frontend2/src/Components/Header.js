import '../Components/Header.css';
import img1 from "../img/shopping-cart.png";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >
                <Link to='/'> <h1 className='h1'>Food Ordering Portal</h1> </Link>
            </div>
            <div onClick={() => props.handleShow(true)}>
               <Link to='/cart'> <h4><img  src={img1}  width="30px" height="30px"/> {props.count}</h4> </Link>
            </div>
        </div>
    );
}

export default Header;