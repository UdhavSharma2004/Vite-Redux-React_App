// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
})

// add createSlice thunk actions here in order to fetch data from the server

const fetchProducts = createAsyncThunk(
    'cart/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
)

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer;