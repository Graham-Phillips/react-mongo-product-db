import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductPreview extends Component {

  // on click send the id back for navigation purposes
  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div className='link ProductPreview' onClick = {this.handleClick}>
        <div className='product-name'>
          {this.props.productName}
        </div>
        <div className='product-description'>
          {this.props.productDescription}
        </div>
      </div>
    )
  }
}

ProductPreview.propTypes = {
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ProductPreview;
