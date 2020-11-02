import * as actionTypes from '../actions/actionTypes'
import intialState from './intialState';

export default function productListReducer(state=intialState.products , action){

    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            
            return action.payload
        default:
            return state;
    }
}