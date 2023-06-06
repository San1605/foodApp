import React from 'react'

const RestaurantCard = ({ name, price, cuisines, avgRating, cloudinaryImageId,deliveryTime,costForTwoString }) => {
  return (
    <div className='flex flex-col h-80 w-80  m-2 p-1 ' > 
      <img className='h-52 w-64' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
      <h1 className='text-md font-bold'>{name}</h1>
      <h2 className='text-md'>{price}</h2>
      <h3 className='text-sm'>{cuisines.join(", ")}</h3>
      <h4 className='text-xs'>{avgRating}</h4>
      <h4 className="text-xs">{deliveryTime} min</h4>
      <h5 className='text-xs'>{costForTwoString}</h5>
    </div>
  )
}

export default RestaurantCard
