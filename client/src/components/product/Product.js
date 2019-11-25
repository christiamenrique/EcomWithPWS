import React from "react";
// import ProductCard from "./ProductCard";
import Specials from "../specials/Specials";
import "./style.scss";

//pass the cards to app.js


function Product(props) {
  const ProductsCard = (product) => {
    return (

      <div className="card-cont" key={product._id}>
        <div className="img-cont">
          <img alt={product.product_name} src={product.img} />
        </div>
        <div className="text-content">
          <h2>{product.product_name}</h2>
          <h3 className="price-modify">${product.price}</h3>
          <p>{product.product_description}</p>
          <button type="button" className="btn btn-success">
          <i className="fas fa-shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <Specials />
      <form className="filter" onSubmit={event => event.preventDefault()}>
        {/* <input className="typeFilter" type="text" onChange={event => props.nameFilter(event)} placeholder="Search for names.." title="Type in a name" /> */}

        <select className="category" onChange={ e => props.dropboxChange(e)}>
          <option value="Category">All Categories</option>
          <option value="processor">Processors</option>
          <option value="watch">Watches</option>
          <option value="play console">Play Consoles</option>
          <option value="tv">Televisions</option>
          <option value="speakers">Speakers</option>
          <option value="drone">Drones</option>
          <option value="phone">Phones</option>
          <option value="alarm">Smart Alarms</option>
          <option value="computer">Computers</option>
          <option value="headphone">EarBuds</option>
          <option value="camera">Cameras</option>
          <option value="iPad">iPads</option>
        </select>
        <select className="priceRange" onChange={e => props.priceChange(e)}>
          <option value="morethan400">Price Range</option>
          <option value="lessthan400">Lowest to Highest</option>
          <option value="morethan400">Highest to lowest</option>
        </select>
      </form>
      {props.products.map(product => ProductsCard(product))
      }
    </React.Fragment>
  )
}

export default Product;
