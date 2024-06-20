import React from "react";
import homeBg from "@/images/home-bg.png";
import Image from "next/image";
import style from "@/styles/style.module.scss";
import TextSection from "@/components/textSection";
import AvatarCards from "@/components/avatarCards";
import WhatWeDo from "@/components/whatWeDo";
import WhatWeDid from "@/components/whatWeDid";
import HomeBlog from "@/components/homeBlog";
import Career from "@/components/career";
import Contact from "@/components/contact";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={style.homeBanner}>
          <div className={style.imageBox}>
            <Image width={1200} height={500} src={homeBg} />
          </div>

          <div className={style.textBox}>
            <h1>Fikirden Gerçeğe</h1>
            <span>Markanızın Teknoloji Yolculuğu</span>
          </div>
        </div>
      </div>

      <TextSection />

      <AvatarCards />

      <WhatWeDo />

      <WhatWeDid />

      <Career />

      <HomeBlog />

      <Contact />
    </>
  );
};

export default Home;
