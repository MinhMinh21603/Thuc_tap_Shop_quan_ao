import "./style/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Providers } from "./Providers";
import Product from './_components_MInh/product_/product_shop'
import Page from '../app/_components_MInh/card/page_list';

// import Slideshow from "./_components/banner/Slideshow";

export const metadata = {
  title: {
    template: "%s - Suruchi",
    default: "Welcome - Suruchi",
  },
  description:
    "Luxurious and modern hotel located in the heart of the city. We offer the best services and amenities for our guests.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      >
        <AppRouterCacheProvider>
          <Providers>
            <Product />

            {children}
          </Providers>

        </AppRouterCacheProvider>
      </body>
    </html>
  )
}