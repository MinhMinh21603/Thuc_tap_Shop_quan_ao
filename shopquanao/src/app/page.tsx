import Slideshow from "./_components/banner/Slideshow";
import Banner from "./_components_Tnhan/Banner";
import Bannerr from "./_components_Tnhan/Bannerr";
import Blog from "./_components_Tnhan/Blog";
import Page_outsale from './_components_MInh/page'
import Page_product_Home from './_component_Phuc/page'
export default function Home() {
  return (
    <>
      <Slideshow></Slideshow>
      <Bannerr></Bannerr>
      <Banner></Banner>
      <Page_product_Home />
      <Page_outsale />
      <Blog></Blog>
    </>
  );
}