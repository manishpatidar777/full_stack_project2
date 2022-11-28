import React, {useState, useEffect} from 'react';
import './CartList.css';
import PizzaList from '../Components/PizzaList';
import BurgarList from './BurgarList';
import axios from 'axios';

function CartList({cart}) {

    const [CART, setCART] = useState([])

    useEffect(() =>{
      setCART(cart)
    }, [cart])


    const [list, setList] = useState([])

    const show = async ()=>{
      const res = await axios.get("http://localhost:8999/")
      setList(res.data)
  }

    const remove = async(val)=>{
      const res = await axios.delete(`http://localhost:8999/${val}`)
      show()
      }

  return (
    <>
      <h1>Our Item</h1>
        {
          CART?.map((cartItem, cartIndex, el) =>{
            return(
              <div className='pizza-list'>
                <div className='pizza-1'>
                    <div className='dt-1'>
                      <p className='dd-1'><strong>{cartItem.name}</strong><br/>
                                    ₹{cartItem.price}.00<br/>{cartItem.des}<br/>
                                    <button className='order-btn' 
                                        onClick={()=>remove(el.task)}>
                                    Remove Item</button>
                      </p>
                      </div>
                      <div className=''>
                        <img src={cartItem.img} alt='' width='100px' height='100px' />
                      </div>
                  </div>
                        
              </div>
            )
          })
        }

    </>
  )
}

export default CartList