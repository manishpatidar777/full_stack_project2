import React, {useState} from 'react';
import './BurgarList.css';
import burgar1 from '../img/burgar1.jpg';
import burgar2 from '../img/burgar2.jpg';
import burgar3 from '../img/burgar3.JPG';


function BurgarList() {

    const [product, setProduct] = useState([
        {
            id: 1,
            img: burgar1,
            name: 'Fried Chicken Burger',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 450,
        },
        {
            id: 2,
            img: burgar2,
            name: 'Paneer Tikka Burger',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 555,
        },
        {
            id: 3,
            img: burgar3,
            name: 'Chicken Classic Cheese Burger',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown it.',
            price: 333,
        }
    ])

  return (
    <>
    <h2>Tasty Burgar</h2>

    {
            product.map((productItem, productIndex)=>{
                return(

                    <>
                            <div className='burgar-list'>
                            <div className='burgar-1'>
                                <div className='dt-1'>
                                <p className='dd-1'><strong>{productItem.name}</strong><br/>
                                    ₹{productItem.price}.00<br/>{productItem.des}<br/>
                                    <button className='order-btn'>Order Now</button>
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

    
    </>
  )
}

export default BurgarList