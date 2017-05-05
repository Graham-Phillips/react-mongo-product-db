import React from 'react';
import ProductPreview from './ProductPreview';
import PropTypes from 'prop-types';

const ProductList = ({ products, onProductClick}) => (
<div className = "ProductList">
    { Object.keys(products).map(productId =>
      <ProductPreview
      key={productId}
      onClick={onProductClick}
      {...products[productId]} />
    )}
</div>
);

ProductList.propTypes = {
  products: PropTypes.object,
  onProductClick: PropTypes.func.isRequired
}

export default ProductList;
