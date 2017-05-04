import React, {Component} from 'react';


class ProductPreview extends Component {

  // on click send the id back for navigation purposes
  handleClick = () => {
    console.log(this.props.productName);
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
  id: React.PropTypes.number.isRequired,
  productName: React.PropTypes.string.isRequired,
  productDescription: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default ProductPreview;
