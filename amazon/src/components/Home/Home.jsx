import React from 'react'
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import s1 from '../images/slider1.jpg';
import s2 from '../images/slider2.jpg';
import s3 from '../images/slider3.png';
import s4 from '../images/slider4.jpg';
import s5 from '../images/slider5.jpg';
import s6 from '../images/slider6.jpg';
import s7 from '../images/slider7.jpg';

const Home = () => {

  const images = [s1, s2, s3, s4, s5, s6, s7]

  const[products, setProducts] = useState([]);

  const fetch = async() => {
    try{
      const res = axios.get('https://fakestoreapi.com/products');
      console.log(res.data);
      setProducts(res.data);
    }
    catch{
      console.log("error while fetching data");
    }
  }
  useEffect(()=>{
    fetch();
  },[]);  

  const[idx, setIdx] = useState(0);
  
  const nextSlide=()=>{
    setIdx((idx + 1) % images.length);
  }
  const preSlide=()=>{
    setIdx((idx - 1 + images.length) % images.length);
  }
  return (
    <div>
      <div className={styles.homeNav}>
        <p>All</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Seller</p>
        <p>Mobiles</p>
        <p>Today's Deal</p>
        <p>releases</p>
        <p>Customer Services</p>
        <p>prime</p>
        <p>Electronics</p>
        <p>fashion</p>
        <p>New lounches mobiles, Electronics & more</p>
        <p>Shop Now</p>
      </div>
      <div className={styles.imgSlider}>
          <button onClick={preSlide}>
          <svg width="1em" height="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
</svg></button>
          <div><img className='img' src ={images[idx]} alt={idx}/></div>
          <button onClick={nextSlide}><svg width="1em" height="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
</svg></button>
      </div>
      <div className={styles.homepageProducts}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((ele,i)=>(
            <div key={i}>
              <h1>New Arrivals</h1>
              <div>
                <h5>{ele.title}</h5>
              </div>
            </div>
        ))
        ):("loading")}
      </div>
    </div>
  )
}

export default Home
