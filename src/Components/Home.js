import React from 'react';
import { CartState } from '../Context/Context';
import Singleproduct from './Singleproduct';
import './styles.css'
import Filter from './Filter';

function Home(props) {
    const {state:{products},
    productState:{byStock,byFastDelivery,sort,byRating,searchQuery},
    productDispatch}=CartState()

    const transformProducts=()=>{
        let sortedProducts=products;


        if(sort){
            sortedProducts=sortedProducts.sort((a,b)=>
            sort==='lowtohigh'?a.price-b.price : b.price-a.price
            )
        }

        if(!byStock){
            sortedProducts=sortedProducts.filter((prod)=>prod.inStock)
        }

        if(byFastDelivery){
            sortedProducts=sortedProducts.filter((prod)=>prod.fastDelivery)
        }

        if(byRating){
            sortedProducts=sortedProducts.filter(
                (prod)=>prod.ratings>=byRating
            )
        }

        if(searchQuery){
            sortedProducts=sortedProducts.filter((prod)=>
            prod.name.toLowerCase().includes(searchQuery)
            )
        }
        return sortedProducts
        
    }

    console.log(products)
    return (
        <div className='home'>
        <Filter/>

        <div className='productContainer'>
        {transformProducts().map((prod)=>{
            return <Singleproduct prod={prod} key={prod.id}/>
        })}
        </div>
        </div>
    );
}

export default Home;