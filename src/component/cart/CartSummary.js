import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartAction";
import {Link} from 'react-router-dom'
import alertify from 'alertifyjs'



class CartSummary extends Component {


  removeFromCart(product){
    this.props.action.removeFromCart(product)
    alertify.error(product.name+" silindi")
}
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="danger"  onClick={()=>this.removeFromCart(cartItem.product)}>x</Badge>
             
             {cartItem.product.name}
            
              <Badge color="warning">{cartItem.quantity}</Badge>
            
             
            </DropdownItem>
          ))}
          <DropdownItem divider />


          <DropdownItem>  <Link to={'/cart'}>Sepete Git</Link>
          </DropdownItem>  Local Storece Link 
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
return{
  action:{
    removeFromCart:bindActionCreators(cartAction.RemoveFromCart, dispatch)
  }
}
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);