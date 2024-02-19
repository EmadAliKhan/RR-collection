import { createSlice } from "@reduxjs/toolkit"

const initialState = {
addToCart : [],
count : 1,
isLoading : false,
isError : false
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        
        addCart : (state,action)=>{
            if (state.addToCart.length === 0) {
                state.addToCart.push(action.payload)
            } else {
                const indexNum = state.addToCart.findIndex((p)=>{
                    if (p.id === action.payload.id) {
                        return true
                    }
                });
                console.log("indexNum of addtocart",indexNum);
                if (indexNum == -1) {
                    state.addToCart.push(action.payload)
                }
            }
        },
        removeAddToCart :(state,action)=>{
            state.addToCart = state.addToCart.filter((prod)=>{
                prod.id !== action.payload.id
            })
        },
        // updateQuantity :(state,action)=>{
        //     const {id,quantity} = action.payload
        //     const productToUptoDate = state.addToCart.find(product=>product.id === id)
        //     if (productToUptoDate) {
        //         productToUptoDate.quantity = quantity
        //     }
        // },
        cartIncrement : (state,action)=>{
            const indexNum = state.addToCart.findIndex((p)=>{
                if (p.id === action.payload) {
                    return true
                }
            });
            console.log("indexNum of cartIncrement",indexNum);
            if (indexNum === -1) {
                state.count = ++state.count
                console.log(state.count);
            }
        },
        cartDecrement : (state,action)=>{
            const indexNum = state.addToCart.findIndex((p)=>{
                if (p.id === action.payload) {
                    return true
                }
            })
            if (indexNum === -1) {
            state.count = --state.count
            console.log(state.count);
            }
        }
    }


})

const {actions,reducer} = cartSlice;
export const {addCart,removeAddToCart,cartIncrement,cartDecrement}= actions

export default reducer;