import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../Context/Context';

function Singleproduct({prod}) {
    const {
        state:{cart},
        dispatch
    }=CartState()
    return (
        <div className='products'>
        <Card>
        <Card.Img src={prod.image} alt={prod.name}/>
        <Card.Body>
        <Card.Title>
        {prod.name}
        </Card.Title>
        <Card.Subtitle>
        <span style={{paddingBottom:10}}>
        {prod.price.split(".")[0]}
        </span>
        {prod.fastDelivery?(<div>Fast Delivery</div>)
        :(<div>4-5 days Delivery</div>)}
        <Rating rating={prod.rating}/>
        </Card.Subtitle>
        {cart.some((p)=>p.id===prod.id)?(
            <Button 
            onClick={()=>{
                dispatch({
                    type:'REMOVE_FROM_CART',
                    payload:prod
                })
            } }
            variant="danger">
            Remove From Cart
            </Button>
        ):
    (
        <Button
        onClick={()=>{
            dispatch({
                type:'ADD_TO_CART',
                payload:prod
            })
        } }
        
        disabled={!prod.inStock}>
        {!prod.inStock ?"Out of Stock":"Add to Cart"}
        </Button>  
    )}
        </Card.Body>
        </Card>
            
        </div>
    );
}

export default Singleproduct;