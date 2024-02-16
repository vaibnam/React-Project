import React, { useEffect, useState } from 'react';
import { CartState } from '../Context/Context';
import { Button, ListGroup , Col, Row, ListGroupItem,Image,Form} from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';


function Cart(props) {
    const {
        state:{cart},
        dispatch
    }=CartState()
    const [total,setTotal]=useState()
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>
        acc+Number(curr.price)*curr.qty,0))
    },[cart])
    return (
        <div className='home'>
        <div className='productContainer'>
        <ListGroup>
        {cart.map((prod)=>(
            <ListGroup.Item>
            <Row>
            <Col md={2}>
            <Image src={prod.image} alt={prod.name}/>
            </Col>
            <Col md={2}>
            <span>{prod.name}</span>
            </Col>

            <Col md={2}>
            <span>{prod.price}</span>
            </Col>

            <Col md={2}>
          <Rating rating={prod.rating}/>
            </Col>
            <Col md={2}>
            <Form.Control as="select" value={prod.qty}
            onClick={(e)=>dispatch({
                type:'CHANGE_CART_QTY',
                payload:{
                    id:prod.id,
                    qty:e.target.value                }
            })}>
            {[...Array(prod.inStock).keys()].map((x)=>(
                <option key={x+1}>{x+1}</option>
            ))}
            </Form.Control>
            </Col>
            <Col md={2}>
            <Button type="button"
            varriant='light'
            onClick={()=>
                dispatch({
                    type:'REMOVE_FROM_CART',
                    payload:prod
                })}>
                <AiFillDelete fontSize={'20px'}/>
                </Button>
            
            </Col>
            </Row>
            </ListGroup.Item>
          
        ))}
        </ListGroup>
        </div>
            <div className='filters summery'>
            <span className='title'>Subtotal ({cart.length})</span>
            <span style={{fontweight:700,fontsize:20}}>Total:{total}</span>
            <Button type='button' disabled={cart.length===0}>Procees to Checkout</Button>
            
            </div>
        </div>
    );
}

export default Cart;