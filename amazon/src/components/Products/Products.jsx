import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './Products.module.css';
import ProductCard from '../ProductCard/ProductCard';
const Products = () => {

    const[products, setProducts] = useState([]);

    const fetchData=async()=>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            console.log(res.data);

        }
        catch(error){
            console.log("error while fetching data")
        }

    }
    
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className={styles.mainContainer}>
        <div className={styles.secondDiv}>
            <div className={styles.filterDiv}>
                this is for the filtering part
            </div>
            <div className={styles.container}>
                {products.map((ele)=> (
                    <ProductCard key={ele.id}
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                    rating={ele.rating.rate}
                    description={ele.description} 
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products
