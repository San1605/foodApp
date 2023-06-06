import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const lat = useSelector((store) => store.cart.lat)
    const long = useSelector((store) => store.cart.long) 

    useEffect(() => {
        getRestaurantInfo();
    }, [lat,long]);

    const getRestaurantInfo = async () => {
        try {
            /* Live Data */
            // const res = await fetch("https://instafood.onrender.com/api/menu?lat=26.2389469&lng=73.02430939999999&restaurantId=" + resId);
            
            const res = await fetch(`https://instafood.onrender.com/api/menu?lat=${lat}&lng=${long}&restaurantId=` + resId); 
            const res_data = await res.json();

            const menuItemsList = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
            const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";



            const menu = menuItemsList.map(item => {
                if ((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory)) {
                    return item.card.card;
                }
            })

            const modifiedData = {
                info: res_data.data.cards[0].card.card.info,
                menu: menu.filter(value => value !== undefined)
            };

            setRestaurant(modifiedData)
        } 
        
        catch (error) {
             console.log(error);
        }
    };

    return restaurant;

}

export default useRestaurantMenu
