import * as actionTypes from '../actions/actionTypes'
import intialState from './intialState';

export default function catagoryReducer(state=intialState.catagories , action){

    switch (action.type) {
        case actionTypes.GET_CATAGORIES_SUCCESS:
            
            return action.payload
        default:
            return state;
    }
}