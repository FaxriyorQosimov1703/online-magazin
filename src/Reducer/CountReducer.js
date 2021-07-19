import { createSlice } from '@reduxjs/toolkit';


const a = createSlice({
    name: 'count',
    initialState: {
        prices: 0,
        count: [1]
    },
    reducers: {
        addPrices: (state,action)=>{
            state.prices = state.prices + action.payload
        localStorage.setItem('prices',JSON.stringify(state.prices))

        },
        onRenderBasketPrices:(state, action)=>{
            state.prices = action.payload
        },
        setPricesClose: (state, action) => {
            state.prices = state.prices - action.payload
        },
        setPricesRemove: (state, action) => {
     
            state.prices = state.prices - action.payload
        },
        setPricesAdd: (state, action) => {
            state.prices = state.prices + action.payload
        },
        setPracesZero: (state, action)=>{
            state.prices = action.payload
        },
        addCount:(state,action)=>{
            state.count.push(action.payload)
            localStorage.setItem('count', JSON.stringify(state.count))
        },
        onRenderBasketcount: (state,action) =>{
            state.count = action.payload
        },
        countAdd: (state,action) =>{
            state.count[action.payload]++
        },
        countRemove: (state,action) =>{
            state.count[action.payload]--
        }
    }
});


export const {countRemove,setPracesZero,onRenderBasketPrices,setPricesClose,setPricesAdd,setPricesRemove,addPrices,countAdd, addCount, onRenderBasketcount, } = a.actions
export default a.reducer