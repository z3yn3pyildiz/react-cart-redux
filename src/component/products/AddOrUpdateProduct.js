import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/catagoryActions";
import { saveProduct } from "../../redux/actions/productsAction";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  catagories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });


  useEffect(() => {
    if (catagories.length === 0) {
      // eger bir link ile gelmiş işe kullanıcı
      getCategories();//catagorylerimizioluştur
    }

    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryID" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then((r) => {
      history.push("/");
    });
  }
  return (
 
      <ProductDetail
        product={product}
        categories={catagories}
        onChange={handleChange}
        onSave={handleSave}
        
       
      />
    );
}
export function getProductById(products, productId) {
  
  let product =
    products.find((product) => product.id == productId) || null;
  
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId; 
 debugger
  debugger
  const product = productId && state.productsListReducer.length> 0
      ? getProductById(state.productsListReducer, productId)
      : {};
    
      

  return {
    product,
    products: state.productsListReducer,
    catagories: state.catagoryListReducer
  };
}
const mapDispatchToProps = {
  getCategories,
  saveProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
