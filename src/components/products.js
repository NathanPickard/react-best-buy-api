import React from 'react'

const ProductList = ({ products }) => {
  return (
    <div>
      <center><h1>Product List</h1></center>
      <div class="row">
        {products.map((product, i) => (
          // Bootstrap classes for responsive design on various screen sizes
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div key={i} class="card text-center">
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <img src={product.images[0].href} alt="card image" />
                <h6 class="card-text">Description:</h6>
                <p class="card-text">{product.shortDescription}</p>
                <p class="card-text">Price: ${product.salePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ProductList