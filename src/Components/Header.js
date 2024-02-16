import React from 'react';
import {Badge, Container, Dropdown, FormControl, Navbar,Nav, NavbarBrand, Button } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Cart from './Cart';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';

function Header(props) {
    const{
        state:{cart},
        productDispatch,
        dispatch
    }=CartState()
    return (
        <div>
        <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
        <Navbar.Brand>
        <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className='search'>
        <FormControl placeholder='search product'
        style={{width:500}}
        className='m-auto'
        onChange={(e)=>{
            productDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value
            })
        }}/>
        </Navbar.Text>
        <Nav className='nav1'>
        <Dropdown variant='success'>
        <Dropdown.Toggle>
        <FaShoppingCart color="white" style={{fontSize:20}}/>
        <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{minWidth:370}}>
        {cart.length > 0 ? (
                <>
                    {cart.map((prod)=>(
                        <span className='cartItem' key={prod.id}>
                        <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="cartItemImg"
                        />
                        <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span>{prod.price.split(".")}</span>
                        </div>
                        <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={()=>
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            })
                        }
                        />
                        </span>
                    ))}
                    <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                            Go To Cart
                        </Button>
                    </Link>
                </>
            ) : (
                <span style={{  padding:0 }}>Cart is empty:</span>
            )}
        </Dropdown.Menu>
        </Dropdown>
        </Nav>

        </Container>
        </Navbar>
            
        </div>
    );
}

export default Header;