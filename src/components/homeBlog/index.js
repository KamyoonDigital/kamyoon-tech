import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import kamyoon from "@/images/whatDid/kamyoon-app.png";
import nakliyeci from "@/images/whatDid/nakliyeci.png";
import eYurt from "@/images/whatDid/e-yurt.png";

const HomeBlog = () => {
  return (
    <div className="container container-padding">
      <div className={style.homeBlog}>
        <h2>Blog</h2>

        <div className="seperator"></div>

        <div className={style.cards}>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={kamyoon} />
            <h3>Mayıs Ayı Özel Günler Listesi</h3>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={nakliyeci} />
            <h3>Sosyal Medyanın Gücü</h3>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={eYurt} />
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
