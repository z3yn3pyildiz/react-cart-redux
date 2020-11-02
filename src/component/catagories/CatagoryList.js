import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem,Badge} from "reactstrap";
import { bindActionCreators } from "redux";
import * as catagoryaction from "../../redux/actions/catagoryActions";
import * as productsActions from "../../redux/actions/productsAction";


class CatagoryList extends Component {
  componentDidMount() {
    this.props.actions.getCatagories();
  }
  selectCtagoryEvent = (catagory) => {
    this.props.actions.changeCatagory(catagory);
    this.props.actions.getProducts(catagory.id);
  };
  render() {
    return (
      <div>
       <Badge color="warning">Category</Badge>
        <ListGroup>
          {this.props.catagories.map((catagory) => (
            <ListGroupItem
              active={
                catagory.id === this.props.currentCatagory.id
              }
              onClick={()=> this.selectCtagoryEvent(catagory)}

              key={catagory.id}>
            
            {catagory.catagoryName}
              
            </ListGroupItem>
          ))}
        </ListGroup>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCatagory: state.changeCatagoryReducer,
    catagories: state.catagoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCatagories: bindActionCreators(catagoryaction.getCategories, dispatch),
      changeCatagory: bindActionCreators(
        catagoryaction.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CatagoryList);
