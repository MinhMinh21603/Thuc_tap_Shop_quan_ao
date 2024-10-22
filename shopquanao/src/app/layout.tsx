import "./style/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Providers } from "./Providers";
import HeaderClient from "./_components/header/HeaderClient";
import Footer from "./_components_Tnhan/Footer";
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
            <HeaderClient />
            {children}
            <Footer></Footer>
          </Providers>

        </AppRouterCacheProvider>
      </body>
    </html>
  )
}