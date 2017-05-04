import React from 'react';
import ProductPreview from './ProductPreview';

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
  products: React.PropTypes.object,
  onProductClick: React.PropTypes.func.isRequired
}

export default ProductList;
