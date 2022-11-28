import './Home.css';
import Img1 from './img/pizza-img.jpeg';
import Img2 from './img/burgar_home.jfif';
import './Components/PizzaList';
import './Components/BurgarList';
import { Link } from 'react-router-dom';



export default function Home() {


  return (
    <>
        <div className="App">
              
          <Link to='/pizza'><button className='img-btn' >
            <img src={Img1} alt='' width='200px' height='200px' />
            <p><strong> Pizza </strong></p>
          </button></Link>
          <Link to='/burgar'><button className='img-btn'>
            <img src={Img2} alt='' width='200px' height='200px' />
            <p><strong> Burger </strong></p>
          </button> </Link> 
           
      </div>
      
    </>
    
  );
}
