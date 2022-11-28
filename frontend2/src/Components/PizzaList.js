import React, {useState} from 'react';
import axios from 'axios';
import './PizzaList.css';
import pizza1 from '../img/pizza1.webp';
import pizza2 from '../img/pizza2.jpeg';
import pizza3 from '../img/pizza3.jpeg';


function PizzaList({cart, addToCart}) {

    const [product, setProduct] = useState([
        {
            id: 1,
            img: pizza1,
            name: 'Tomato Basil Italian Pizza',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 450,
        },
        {
            id: 2,
            img: pizza2,
            name: 'Bombay Pizza',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 555,
        },
        {
            id: 3,
            img: pizza3,
            name: 'Tomato Basil Italian Pizza',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 333,
        }
    ])

    // const [cart, setCart] = useState([])
    // const [showCart, setShowCart] = useState(false)
  
    // const addToCart = (data) => {
    //   setCart([...cart, { ...data, quantity: 1 }])
    // }
  
    // const handleShow = (value) => {
    //   setShowCart(value)
    // }
   

  return (
    <>
    <div>
        <h2>Tasty Pizzas</h2>;
        {
            product.map((productItem, productIndex)=>{
                return(

                    <> 
                        <div className='pizza-list'>
                            <div className='pizza-1'>
                                <div className='dt-1'>
                                    <p className='dd-1'><strong>{productItem.name}</strong><br/>
                                        ₹{productItem.price}.00<br/>{productItem.des}<br/>
                                        <button className='order-btn' 
                                            onClick={([product])=> addToCart(productItem)}>
                                        Order Now</button>
                                    </p>
                                </div>
                                <div className=''>
                                    <img src={productItem.img} alt='' width='100px' height='100px' />
                                </div>
                            </div>
                        
                        </div>
                    </>
                    )
                })
        }
        </div>
    </>
  )
}

export default PizzaList