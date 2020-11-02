import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productsActions from "../../redux/actions/productsAction";
import * as cartAction from "../../redux/actions/cartAction";
 import alertify from 'alertifyjs'
 import {Link} from 'react-router-dom'


class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart=(product)=>{
    this.props.actions.AddToCart({quantity:1,product})
    alertify.success(product.name+"sepete eklendi.")
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Product</Badge>
          <Badge color="success">
            {this.props.currentCatagory.catagoryName}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
            
              <th>Product name</th>
              <th>Unit price</th>
              <th>Quantity per unit</th>
              <th>Units Stock</th>
              <th>Katagori ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
               
                <td><Link to={"/saveproduct/"+product.id}>{product.name}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.categoryID}</td>
                
               
                
                
                <td>
                  <Button color="secondary"  onClick={()=>this.addToCart(product)}>
                   add'cart
                  </Button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCatagory: state.changeCatagoryReducer,
    products: state.productsListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      AddToCart:bindActionCreators(cartAction.AddToCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
