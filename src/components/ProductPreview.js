import React from 'react';

const ProductPreview = (product) => (
  <div className='ProductPreview'>
    <div className='product-name'>
      {product.productName}
    </div>
    <div className='product-description'>
      {product.productDescription}
    </div>
  </div>
);

export default ProductPreview;
