import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Place from "./Place"
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const lat = useSelector((store) => store.cart.lat)
    const long = useSelector((store) => store.cart.long)

    useEffect(() => {
        getRestaurants();
    }, [lat, long])

    const handleSubmit = () => {
        if (searchQuery !== "") {
            setFilteredRestaurants(restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes((searchQuery.toLowerCase()))))
        }
        else {
            setFilteredRestaurants(restaurants)
        }
    }
    const getRestaurants = async () => {
        // const res = await fetch("https://instafood.onrender.com/api/restaurants?lat=26.2389469&lng=73.02430939999999");
        const res = await fetch(`https://instafood.onrender.com/api/restaurants?lat=${lat}&lng=${long}`);
        const data = await res.json();
        setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    }
    // console.log(restaurants)
    if (!restaurants) return null
    if (!filteredRestaurants) return <h1>No result Found</h1>

    return (
        <>
            <div className="h-12 w-96 my-3 mx-3">

                <input className='border border-black rounded-lg px-2 text-lg' type="search" onChange={((e) => setSearchQuery(e.target.value))} />
                <button className='border border-black rounded-lg mx-2 px-2 text-lg' onClick={(() => handleSubmit())}>Search</button>
            </div>
            <div className="flex flex-row flex-wrap justify-center">

                {
                    filteredRestaurants.map((item) => (
                        <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                            <RestaurantCard {...item.data} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Body