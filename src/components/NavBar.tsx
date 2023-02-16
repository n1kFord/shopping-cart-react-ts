import React from 'react';
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext";

const NavBar = () => {

    const {openCart, cartQuantity} = useShoppingCart();
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-5">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button style={{width: "3rem", height: "3rem", position: "relative"}} variant="primary"
                            className="rounded-3 bg-light border-dark" onClick={openCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                        </svg>
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center">{cartQuantity}</div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    );
};

export default NavBar;