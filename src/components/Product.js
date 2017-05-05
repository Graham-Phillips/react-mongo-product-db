import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return (
      <div className = "Product">
        {this.props.description}
      </div>
    );
  }
}

Product.PropTypes = {
  description: PropTypes.string.isRequired
};

export default Product;
