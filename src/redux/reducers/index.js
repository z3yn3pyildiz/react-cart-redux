import {combineReducers } from 'redux'
import changeCatagoryReducer from './changeCatagoryReducer'
import catagoryListReducer from './catagoryListReducer'
import productsListReducer from './productListReducer'
import cartReducer from './cartReducer'
import savedProductReducer from './saveProductReducer'
const rootReducer=combineReducers({
    changeCatagoryReducer,
    catagoryListReducer,
    productsListReducer,
    cartReducer,
    savedProductReducer
})

export default rootReducer;