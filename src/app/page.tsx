import Header from "@/app/component/Header";
import HeroSection from "@/app/component/Herosection";
import React from "react";
import Section from "@/app/component/section";
import TopPicks from "@/app/component/topPicks";
import Banner from "@/app/component/Banner";
import Blogs from "@/app/component/Blog";
import Banner2 from "@/app/component/Banner2";
import Footer from "@/app/component/footer";


const Home = () => {
  return (
    <div>
        <Header/>
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>
      <Section />
      <TopPicks />
      <Banner />
      <Blogs />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;