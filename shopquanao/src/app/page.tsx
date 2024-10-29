import React, { Suspense, lazy } from 'react';

// Lazy load các component 
const Slideshow = lazy(() => import("./_components/banner/Slideshow"));
const Banner = lazy(() => import("./_components_Tnhan/Banner"));
const Bannerr = lazy(() => import("./_components_Tnhan/Bannerr"));
const Blog = lazy(() => import("./_components_Tnhan/Blog"));
const PageOutsale = lazy(() => import('./_components_MInh/page'));
const PageProductHome = lazy(() => import("./components_Phuc/page"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slideshow />
      <Bannerr />
      <Banner />
      <PageProductHome />
      <PageOutsale />
      <Blog />
    </Suspense>
  );
}