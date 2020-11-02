import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return {
     type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: products };
}

export function createProductSuccess(product) {
 
  return { 
    type: actionTypes.CREATE_PRODUCT_SUCCESS, 
    payload: product };
}

export function updateProductsSuccess(product) {
  debugger
  return { 
    type: actionTypes.UPDATE_PRODUCT_SUCCESS, 
    payload:product };
}

export function saveProductApi(product) {
  debugger
  return fetch("https://my-json-server.typicode.com/z3yn3pyildiz/northwindapi/product/"+(product.id||""), {
    method: product.id? "PUT" : "POST",
    headers : {'content-type' : "application/json"},
    body: JSON.stringify(product),
  })
    .then(handleResponse)

    .catch(handleError); 
}

export function saveProduct(product) {
  return function (dispatch) {
    debugger
 
    return saveProductApi(product)
    
    .then((savedProduct) => {
      product.id
        ? dispatch(updateProductsSuccess(savedProduct)) 
        : dispatch(createProductSuccess(savedProduct));
    }).catch(error=>{
      throw error;
    })
  };

}
export async function handleResponse(response){
  debugger
if(response.ok){
  return response.json 
}
const error=await response.text()
throw new Error(error)
}

export function handleError(error){
  throw error;
}

export function getProducts(catagoryId) {
  return async function (dispatch) {
   et url = "https://my-json-server.typicode.com/z3yn3pyildiz/northwindapi/product";
    if (catagoryId) {
      url = url + "?categoryID=" + catagoryId;
    }
    const response = await fetch(url);
    const result = await response.json();
    return dispatch(getProductsSuccess(result));
  };
}
