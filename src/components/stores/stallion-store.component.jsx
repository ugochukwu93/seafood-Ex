import React from 'react';
import './stallion-store.styles.css'

const StallionStore = ({ about, price, title, imageUrl}) => (
<div class="card" style={{ width: "18rem" }}>
      <img src={imageUrl} class="card-img-top" alt="..." />
      <div class="middle">
        <div class="text">{about}</div>
      </div>
  <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <div className='price'>
         <h3 class="card-text">{price}</h3>
        <button class="btn btn-primary">Add to Cart</button> 
      </div>
  </div>
</div>
)
export default StallionStore
