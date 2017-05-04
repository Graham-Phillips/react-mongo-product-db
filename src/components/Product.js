import React, {Component, PropTypes} from 'react';

class Product extends Component {
  render() {
    return (
      <div className = "Product">
        {this.props.id}
      </div>
    );
  }
}

Product.PropTypes = {
  id: PropTypes.number.isRequired
};

export default Product;
