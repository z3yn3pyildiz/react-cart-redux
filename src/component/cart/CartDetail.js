import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product){
        this.props.action.removeFromCart(product)
        alertify.error(product.name+" silindi")
    }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Unit price</th>
              <th>Quantity</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((
              product // state deki cart arayyi
            ) => (
              <tr key={product.product.id}>
                <th scope="row">{product.product.id}</th>
                <td>{product.product.name}</td>
                <td>{product.product.unitPrice}</td>
                <td>{product.quantity}</td>

                <td>
                  <Button
                    color="danger"
                    onClick={() =>
                      this.removeFromCart(product.product)
                    
                    }
                  >
                    Sil
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

function mapDispatchToProps(dispatch) {
  return {
    action: {
      removeFromCart: bindActionCreators(cartAction.RemoveFromCart, dispatch), //RemoveFromCart fonk baglendık
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer, //Cartreducer a baglandım
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
