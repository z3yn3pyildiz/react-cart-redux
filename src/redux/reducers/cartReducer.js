import * as actionTypes from "../actions/actionTypes";
import initialState from "./intialState";

export default function cartReducer(state = initialState.cart, action) {
  debugger;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        var addedItem=state.find(c=>c.product.id == action.payload.product.id)
        
       
       
        if(addedItem){ 
            var newstate=state.map(cartItem=>{
                if(cartItem.product.id=== action.payload.product.id){
                    return Object.assign({}, addedItem, {
                        quntity: cartItem.quantity+=1
                       
                      });
                      
                      
                    }
                    return cartItem;
                  });
                  return newstate;
         }
        else{
            return [ ...state,{...action.payload}]
        }
      case actionTypes.REMOVE_FROM_CART:
        const mynewarray=state.filter(cartItem=>cartItem.product.id!==action.payload.id)
        return mynewarray;
      default:
          debugger;
          return  state;
     
  }
}