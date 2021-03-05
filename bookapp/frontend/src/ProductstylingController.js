
import React from "react";
import{
    
    Link
  } from 'react-router-dom'

function ProductstylingController({ title, price, imagePath,}) {
 
  return (
    <div className="product">
        <p className="imagePath">
            <Link to ="/getBooksByTitle">
    <img src= {imagePath} width="150px" height="250px"></img>
    </Link>
        </p>
       <div className="product__info">
        <p>{title}</p>
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
         </p>
       <button>Add to Basket</button>
      </div>
    
    
     
  );
}

export default ProductstylingController;