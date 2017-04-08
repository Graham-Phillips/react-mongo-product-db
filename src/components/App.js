import React from 'react';
import Header from './Header';
import ProductPreview from './ProductPreview';

class App extends React.Component  {
  // as we are using babel-stage-2 we can use class properties
  state = {
    headerText: 'Product Dataabaase dddd',
    products: this.props.initialProducts
  };

  

  // iterate over products with map to pass through each product to ProductPreview
  render() {
    return (
      <div className='App'>
        <Header message={this.state.headerText}/>
        <div>
          {this.state.products.map(product =>
            <ProductPreview key={product.id} {...product} />
          )}
        </div>
      </div>
    );
  }
}


export default App;
