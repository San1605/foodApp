import React, { useState } from 'react'
import Button from './Button'
const Card = ({ item }) => {

    return (
        <div className='flex flex-row bg-blue-200 my-20 p-1 justify-between'>

            <div className='bg-pink-200 flex flex-col'>
                <h1>{item[0]?.info?.name}</h1>
                <h2>{item[0]?.info?.price}</h2>
                <h3>{item[0]?.info?.description}</h3>
            </div>

            <div className='flex flex-col h-40 w-44'>
                <img className='h-38 w-40'
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item[0]?.info?.imageId}
                    alt="menu"
                    onError={(ev) => {
                        ev.target.src = "https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/308548692_604670684684747_1330594698216450146_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sQPDWOCA4fgAX-0kgkW&_nc_ht=scontent.fjai1-3.fna&oh=00_AfBvPK7XFEvVhaCzeplKlF_mi7bNCdKTEJMGCdzx6tfyXA&oe=642D90F3"
                    }} />

                <Button item={item} />
            </div>
        </div>
    )
}

export default Card
