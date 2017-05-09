import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return (
      <div className = "Product">
        <div className="contest-description">
          {this.props.description}
        </div>
        <div className="home-link link"
             onClick={this.props.productListClick}>
          Product List
        </div>
      </div>
    );
  }
}

Product.PropTypes = {
  id: PropTypes.number.isRequired,
  productListClick: PropTypes.func.isRequired
};

export default Product;
