import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        totalCount: 0,
        
        lat:"26.9124336",
        long:"75.7872709",
    },
    reducers: {
        // removeFromCart: (state, action) => {
        //     state.items = state.items.filter((item) => action.payload !== item.id);
        // },

        increment: (state, action) => {
            const item = state.items[action.payload.id];
            const quantity = item && item.hasOwnProperty("quantity") ? state.items[action.payload.id]?.quantity + 1 : 1
            state.items[action.payload.id] = { ...action.payload, quantity };
            state.totalCount = state.totalCount + 1
        },
        decrement: (state, action) => {
            const item = state.items[action.payload];
            if (!item) return;
            if (item.quantity > 1) {
                item.quantity -= 1;
                state.totalCount--;
            }
            else {
                state.totalCount--;
                delete state.items[action.payload]
            }
        },
        clearCart: (state, action) => {
            state.items = {};
            state.totalCount = 0
        },
        getLatitude:(state,action)=>{
            state.lat=action.payload
        },
        getLongitude:(state,action)=>{
            state.long=action.payload
        }

    }

})


export const { addtoCart, clearCart, increment, decrement ,getLatitude,getLongitude } = cartSlice.actions
export default cartSlice.reducer