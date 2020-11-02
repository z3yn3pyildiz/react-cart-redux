import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
  NavbarText
} from 'reactstrap';
import CartSummery from '../cart/CartSummary';
import {Link} from 'react-router-dom'

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand ><Link to='/'> NothWind Mağazası </Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink ><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
            </NavItem>
            <CartSummery></CartSummery>
           <NavLink href="https://github.com/z3yn3pyildiz/react-cart-redux">Githup</NavLink>
          </Nav>
          <NavbarText>Northwind Magazasi uygulaması</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;