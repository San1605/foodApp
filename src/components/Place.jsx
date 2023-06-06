import React from 'react'
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getLatitude, getLongitude } from "../redux/cartSlice"

const Place = () => {

    const [lat, setLat] = useState("26.9124336");
    const [long, setLong] = useState("75.7872709");
    const [place, setPlace] = useState("Jaipur")
    const [placedId, setPlaceId] = useState("ChIJgeJXTN9KbDkRCS7yDDrG4Qw");

    useEffect(() => {
        getdata()
    }, [place])

    const getdata = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${place}&types=`)
        const data = await res.json();
        setPlaceId(data?.data[0]?.place_id)
        // console.log(data?.data[0]?.place_id)
    }
    useEffect(() => {
        getLatLong();
    }, [placedId])

    const getLatLong = async () => {

        const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placedId}`)
        const data = await res.json();
        setLat(data?.data[0]?.geometry?.location?.lat)
        setLong(data?.data[0]?.geometry?.location?.lng)
        dispatch(getLatitude(lat));
        dispatch(getLongitude(long))
    }
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(getLatitude(lat));
        dispatch(getLongitude(long))
    }
    // console.log(lat)
    // console.log(long)
    // https://www.swiggy.com/dapi/misc/place-autocomplete?input=sawaimadhopur&types=
    // https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJgeJXTN9KbDkRCS7yDDrG4Qw
    return (

        
        <div>
            <div>
                <input type="search" name="" id="" value={place} onChange={(e) => setPlace(e.target.value)} className='border border-black rounded-lg px-2 text-lg' />
                <button className='border border-black rounded-lg mx-2 px-2 text-lg'  onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default Place
