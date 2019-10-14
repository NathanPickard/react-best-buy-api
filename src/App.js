import React, { Component } from 'react';
import ProductList from './components/products';
import './App.css';

class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch('https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=all&apiKey=mPlbr5GXMVkagVgzwT7T2V5X')
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data.products })
        console.log(data.products[0].images);
      })
      .catch(console.log)
  }

  render() {
    return (
      <ProductList products={this.state.products} />
    );
  }
}

export default App;
