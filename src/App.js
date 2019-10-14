import React, { Component } from 'react';
import ProductList from './components/products'; // Imports the product list to be rendered
import './App.css';

class App extends Component {

  // State to store the output from the API request
  state = {
    products: [],
    page: 1
  }

  componentDidMount() {
    // Method to be called immediately after the component is mounted
    this.loadProducts();
  }

  loadProducts = () => {
    const { page } = this.state; // Passing in the first page of products
    //  URL to fetch request from API
    const url = `https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?page=${page}&format=json&show=all&apiKey=mPlbr5GXMVkagVgzwT7T2V5X`
    fetch(url)
      .then(res => res.json()) // Parse the output to JSON
      .then((data) => {
        this.setState({ products: data.products }) // Sets the value of the state to the outout from the API
      })
      .catch(console.log) // Log any errors
  }

  render() {
    return (
      // Passing in the product products component, along with the state to be rendered
      <ProductList products={this.state.products} />
    );
  }
}

export default App;
