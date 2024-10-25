import React from 'react';
import ProductTabs from '../_components/productdetail/ProductTabs';
import ProductDetail from '../_components/productdetail/ProductDetail';

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail></ProductDetail>
      <ProductTabs></ProductTabs>    
    </>
  );
};

export default ProductDetailPage;