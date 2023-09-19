import React from 'react'
import styles from './ProductCard.module.css';
const ProductCard = ({image, title, price, rating, description}) => {
  console.log({rating});
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={image} alt={title}/>
      </div>
      <div className={styles.detailDiv}>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductCard
