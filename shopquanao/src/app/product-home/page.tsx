import React, { Suspense, lazy } from 'react';
// tối ưu hóa khi truyền vào
const PageProduct = lazy(() => import('../_components_MInh/product/page'));

const page_product = () => {

    return (
        <Suspense fallback={<div>loading ...</div>}>
            <PageProduct />
        </Suspense>
    )
}
export default page_product;