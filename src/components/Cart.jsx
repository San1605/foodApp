import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItem = useSelector(store => store.cart.items);
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(clearCart())
  }

  console.log(cartItem)
  return (
    <div>
      {
        Object.values(cartItem).map((item) => (
          <>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item?.imageId} alt="" />
            <h1>{item?.name}</h1>
            <h2>{item?.price}</h2>
            <h3>{item?.description}</h3>
            <button onClick={() => dispatch(increment(item))}>+</button>
            {
              item?.quantity ? (<h2>{item?.quantity}</h2>) : (<h2>0</h2>)
            }

            <button onClick={(() => dispatch(decrement(item?.id)))}>-</button>
          </>
        ))
      }
      <button className='border border-black' onClick={() => handleClick()}>Clear Cart</button>
      <button className='border border-black' onClick={() => handleClick()}>Place Order</button>
    </div>
  )
}


export default Cart
