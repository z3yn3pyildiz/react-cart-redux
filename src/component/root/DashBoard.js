import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'
import CatagoryList from '../catagories/CatagoryList'
import ProductList from '../products/ProductList'
import Myfooter from './Footer'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3"> <CatagoryList> </CatagoryList> </Col>
                    <Col xs="9"> <ProductList></ProductList>  </Col>
                </Row>
               <Myfooter></Myfooter>
                
            </div>
        );
    }
}

export default DashBoard;