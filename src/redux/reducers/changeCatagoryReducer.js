import * as actionTypes from '../actions/actionTypes'
import intialState from './intialState';

export default function changeCatagoryReducer(state=intialState.currentCatagory , action){

    switch (action.type) {
        case actionTypes.CHANGE_CATAGORY:
            
            return action.payload
        default:
            return state;
    }
}