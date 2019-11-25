import React, {useState, useEffect } from 'react';
import "./style.scss";
import axios from "axios";


const ProductsCard = props =>{
  const [ products, setProducts ] = useState([])

  console.log(products)
  return(
    <div className="card-cont">
      <div className="img-cont">
        <img alt={props.products.product_name} src={props.products.img} />
      </div>
      <div className="text-content">
        <h2>{props.product_name}</h2>
        <h3 className="price-modify">${props.products.price}</h3>
        <p>{props.products.description}</p>
        <button type="button" className="btn btn-success">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductsCard