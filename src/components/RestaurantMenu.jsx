import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import MenuItems from './MenuItems';
import Card from './Card';
const RestaurantMenu = () => {

  const { id } = useParams();
  const restaurant = useRestaurantMenu(id)

  const itemCards = []
  Object.values(restaurant?.menu).map((item) => {
    itemCards.push(item?.itemCards)
  });
  console.log(itemCards)
  // itemCards.map((card)=>[
  //   console.log(card)
  // ])

  if (restaurant === null) return null;
  return (
    <div >
      <div className='flex flex-row w-screen bg-blue-950 h-52 my-6 justify-evenly items-center text-gray'>

        <img className='h-44 w-52 justify-center' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant?.info.cloudinaryImageId} alt="" />
        <div className='flex flex-col text-gray-50 p-4' >
          <h1 className='text-3xl font-semibold py-1'>{restaurant?.info.name}</h1>
          <h1 className='text-md '>{restaurant?.info.cuisines.join(", ")}</h1>
          <div className='flex flex-row py-3  left-0 '>
            <h1 className='text-sm'>{restaurant?.info.avgRating} ⭐️</h1>
            <h1 className='text-sm pl-6 pr-6'>|</h1>
            <h3 className='text-sm '>{restaurant?.info.sla.slaString}</h3>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-screen'>
        {
          // Object.values(restaurant?.menu).map((item) => {
          // <>
          //   <MenuItems itemCard={item?.itemCards} key={item?.itemCards} />
          // </>
          // )
        }
      </div>
    </div>


  )
}


export default RestaurantMenu
