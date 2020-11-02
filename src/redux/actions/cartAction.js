import * as actionTypes from "./actionTypes";


export function AddToCart(cartItem){
return{type:actionTypes.ADD_TO_CART,payload:cartItem}
}
export function RemoveFromCart(cartItem){
    return{type:actionTypes.REMOVE_FROM_CART,payload:cartItem}
}