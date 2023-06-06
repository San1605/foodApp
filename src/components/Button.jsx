import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { decrement, increment } from '../redux/cartSlice';
const Button = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();
    return (
        <div className='flex flex-row border border-black  '>
            <button className=' mx-1 px-1 text-md' onClick={() => {
                dispatch(increment(item[0]?.info))
                setItemCount(itemCount + 1)
            }
            }>+</button>

            <h2 className=' mx-1 px-1 text-md' >{itemCount}</h2>

            <button className=' mx-1 px-1 text-md' onClick={() => {
                dispatch(decrement(item[0]?.info?.id))
                setItemCount(itemCount - 1)
            }
            }>-</button>

        </div>
    )
}

export default Button
