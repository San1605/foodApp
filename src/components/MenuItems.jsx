import React from 'react'
import Card from './Card';
const MenuItems = (itemCard) => {
    // const arr = Object.values(itemCard)
    // //    const arr1=Object.values(arr)
    // const arr1=(arr[0])
    // console.log(arr1)

    const arr1 = Object.values(itemCard)[0];
    const arr2 = []
    arr1?.map((card) => {
        if (card !== undefined) {
            arr2.push(Object.values(card))
        }
    })

    console.log(Object.values(itemCard).length)
    console.log(arr2.length)
    return (
        <div className='flex flex-col w-[60rem] h-52 m-4 p-2 bg-pink-400'>
            {
                arr2?.map((item) =>
                (
                    <Card item={item} key={item[0]?.info?.id} />
                ))
            }
        </div>
    )
}

export default MenuItems
