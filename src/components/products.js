import React from 'react'

const ProductList = ({ products }) => {
  // Returns the mapped version of the products state
  return (
    <div>
      <center><h1>Product List</h1></center>
      <div className="row">
        {/* // Loops over the products state to insert the specific products name, image, description and price */}
        {products.map((product, i) => (
          // Bootstrap classes for responsive design on various screen sizes
          <div key={i} className="col-xs-12 col-sm-6 col-xl-4">
            <div className="card text-center">
              <div className="card-header">{product.name}</div>
              <div className="card-body">
                <img src={product.images[0].href} alt="card image" />
                <h6 className="card-text">Description:</h6>
                <p className="card-text">{product.shortDescription}</p>
                <p className="card-text">Price: ${product.salePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ProductList