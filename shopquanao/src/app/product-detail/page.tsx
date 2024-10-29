import React, { Suspense, lazy } from 'react';
// tối ưu hóa giảm tải lazu
const ProductTabs = lazy(() => import('../_components/productdetail/ProductTabs'))
const ProductDetail = lazy(() => import('../_components/productdetail/ProductDetail'))


const ProductDetailPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ProductDetail />
      <ProductTabs />
    </Suspense>
  );
};

export default ProductDetailPage;