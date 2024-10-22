import BannerLogin from "@/app/_components/BannerLogin";
import BannerSmallAboutUS from "@/app/_components/BannerSmallAboutUS";
import ContentSectionAboutUS from "@/app/_components/ContentSectionAboutUS";
import SecctionOurTeam from "@/app/_components/SecctionOurTeam";
import Sponsor from "@/app/_components/Sponsor";
import Image from "next/image";
import React from "react";

const sponsors = [
  {
    image: "/sponsor.jpg",
    alt: "Sponsor 1",
    title: "Shipping",
    description: "From handpicked sellers",
  },
  {
    image: "/sponsor.jpg",
    alt: "Sponsor 2",
    title: "Payment",
    description: "From handpicked sellers",
  },
  {
    image: "/sponsor.jpg",
    alt: "Sponsor 3",
    title: "Return",
    description: "From handpicked sellers",
  },
  {
    image: "/sponsor.jpg",
    alt: "Sponsor 4",
    title: "Support",
    description: "From handpicked sellers",
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* Banner Section */}
      <BannerLogin title="About Us" image="/testBanner.jpg" />

      {/* Main Content Section */}
      <ContentSectionAboutUS></ContentSectionAboutUS>
      <BannerSmallAboutUS image="/testBanner.jpg"></BannerSmallAboutUS>
      <SecctionOurTeam></SecctionOurTeam>
      <div className="px-4 sm:px-[80px] lg:px-[175px] w-full bg-white">
        <Sponsor sponsors={sponsors} />
      </div>
      <div className="w-full bg-[#ee2761] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center content-evenly h-[219px] px-[175px]">
  <div className="w-[164px] h-[39px] group relative">
    <Image
      src={"/rollupBanner.jpg"}
      alt="something"
      fill
      objectFit="cover"
      className="group-hover:scale-110 transition-all duration-300"
    />
  </div>
  <div className="w-[164px] h-[39px] group relative">
    <Image
      src={"/rollupBanner.jpg"}
      alt="something"
      fill
      objectFit="cover"
      className="group-hover:scale-110 transition-all duration-300"
    />
  </div>
  <div className="w-[164px] h-[39px] group relative">
    <Image
      src={"/rollupBanner.jpg"}
      alt="something"
      fill
      objectFit="cover"
      className="group-hover:scale-110 transition-all duration-300"
    />
  </div>
  <div className="w-[164px] h-[39px] group relative">
    <Image
      src={"/rollupBanner.jpg"}
      alt="something"
      fill
      objectFit="cover"
      className="group-hover:scale-110 transition-all duration-300"
    />
  </div>
  <div className="w-[164px] h-[39px] group relative col-span-2 sm:col-auto">
    <Image
      src={"/rollupBanner.jpg"}
      alt="something"
      fill
      objectFit="cover"
      className="group-hover:scale-110 transition-all duration-300"
    />
  </div>
</div>

    </div>
  );
};

export default AboutUs;
