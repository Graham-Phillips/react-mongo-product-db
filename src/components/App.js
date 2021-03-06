import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Product from './Product';
import * as api from '../api';
import PropTypes from 'prop-types';

// function to utilise the html5 history api. this app is very simple so we can use this instead of React router
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

// assign a handler to the onPopState event
const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component  {
  // as we are using babel-stage-2 we can use class properties
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };

  state = this.props.initialData;

  componentDidMount() {
  // deal with browser back button:
    onPopState((event) => {
      this.setState({
        currentProductId: (event.state || {}).currentProductId
      });
    });
  }

  componentWillUnmount() {
    // when component is unloaded, ensure the nav history handler is cleared
    onPopState(null);
  }

  fetchProduct = (productId) => {
    // change route to product page
    pushState(
      { currentProductId: productId }, // state object
      `/product/${productId}` // url
    );
    // get the product info
    api.fetchProduct(productId).then(product => {
      this.setState({
        currentProductId: product._id,
        products: {
          ...this.state.products,
          [product._id]: product
        }
      });
    });
  };

  fetchProductList = () => {
    // first, navigate:
    pushState(
      { currentProductId: null },
      '/' // new url pushed to history state
    );
    api.fetchProductList().then(products => {
      this.setState({
        currentProductId: null, // current product being null causes UI to change
        products
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

  fetchAreas = (areaIds) => {
    if (areaIds.length === 0) {
      return;
    }
    api.fetchAreas(areaIds).then(areas => {
      this.setState( {
        areas
      });
    });
  };

  lookUpArea = (areaId) => {
    // if on initial load the areas will be undefined as fetchAreas not called yet
    if(!this.state.areas || !this.state.areas[areaId]) {
      return {
        name: 'loading...'
      }; // areas not available
    }
    return this.state.areas[areaId];
  };

  // Render content. Either show the list of products, or if we have a current product, show it
  currentContent() {
    if(this.state.currentProductId){
      return <Product
            productListClick={this.fetchProductList}
            fetchAreas={this.fetchAreas}
            lookUpArea={this.lookUpArea}
            {...this.currentProduct()} />;
    }

    return <ProductList
            onProductClick = {this.fetchProduct}
            products={this.state.products} />;
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
