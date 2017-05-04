import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Product from './Product';

// function to utilise the html5 history api. this app is very simple so we can use this instead of React router
const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
}

class App extends React.Component  {
  // as we are using babel-stage-2 we can use class properties
  state = {
    headerText: 'Product Database',
    products: this.props.initialProducts
  };
  componentDidMount() {

  }

  fetchProduct = (productId) => {
    // change route to product page
    pushState(
      { currentProductId: productId }, // state object
      `/product/${productId}` // url
    );
    // get the product info
    // this.state.products[productid]
    this.setState({
      // on navigation, change the title on the page:
      headerText: this.state.products[productId].productName,
      currentProductId: productId // if currentProductId is set on state we use it to set the main content of the page
    });
  };

  // either show the list of products, or if we have a current product, show it
  currentContent() {
    if(this.state.currentProductId){
      return <Product {...this.state.products[this.state.currentContent]} />;
    }
    return <ProductList
            onProductClick = {this.fetchProduct}
            products={this.state.products} />;

  };

  // iterate over products with map to pass through each product to ProductPreview
  render() {
    return (
      <div className='App'>
        <Header message={this.state.headerText} />
        {this.currentContent()}
      </div>
    );
  }
}


export default App;
