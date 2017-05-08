import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Product from './Product';
import * as api from '../api';

// function to utilise the html5 history api. this app is very simple so we can use this instead of React router
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component  {
  // as we are using babel-stage-2 we can use class properties
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };

  state = this.props.initialData;
  componentDidMount() {

  }

  fetchProduct = (productId) => {
    console.log("fetchProduct clicked");
    // change route to product page
    pushState(
      { currentProductId: productId }, // state object
      `/product/${productId}` // url
    );
    // get the product info
    api.fetchProduct(productId).then(product => {
      this.setState({
        currentProductId: product.id,
        products: {
          ...this.state.products,
          [product.id]: product
        }
      });
    });
  };
  currentProduct() {
      return this.state.products[this.state.currentProductId];
    }
    pageHeader() {
      if (this.state.currentProductId) {
        return this.currentProduct().productName;
      }
      return 'Products';
    }
  // either show the list of products, or if we have a current product, show it
  currentContent() {
    if(this.state.currentProductId){
      return <Product {...this.currentProduct()} />;
    }
    return <ProductList
            onProductClick = {this.fetchProduct}
            products={this.state} />;
  }

  // iterate over products with map to pass through each product to ProductPreview
  render() {
    return (
      <div className='App'>
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
