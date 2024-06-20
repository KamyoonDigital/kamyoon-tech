import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import blog1 from "@/images/blogs/blog-1.png";
import blog2 from "@/images/blogs/blog-2.png";
import blog3 from "@/images/blogs/blog-3.png";

const HomeBlog = () => {
  return (
    <div className="container container-padding">
      <div className={style.homeBlog}>
        <h2>Blog</h2>

        <div className="seperator"></div>

        <div className={style.cards}>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={blog1} />
            <h3>Mayıs Ayı Özel Günler Listesi</h3>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={blog2} />
            <h3>Sosyal Medyanın Gücü</h3>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={blog3} />
            <h3>2028 Lojistiği</h3>
          </div>
        </div>

        <div className={style.buttons}>
          <button>Tümünü Gör</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
