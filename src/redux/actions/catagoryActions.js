import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { 
      type: actionTypes.CHANGE_CATAGORY, payload: category
     };
}
export function getCategoriesSuccess(categories){
  return { type: actionTypes.GET_CATAGORIES_SUCCESS, payload: categories};
}

export  function getCategories(){
  
  return async function(dispatch){
    
   let url="https://my-json-server.typicode.com/z3yn3pyildiz/northwindapi/catagory";
    const response = await fetch(url);
    const result = await response.json();
    return dispatch(getCategoriesSuccess(result));

  };
}
