import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import kamyoon from "@/images/whatDid/kamyoon-app.png";
import nakliyeci from "@/images/whatDid/nakliyeci.png";
import eYurt from "@/images/whatDid/e-yurt.png";

const WhatWeDid = () => {
  return (
    <div id="neler-yaptık" className="container container-padding">
      <div className={style.whatWeDid}>
        <h2>Neler Yaptık?</h2>

        <div className="seperator"></div>

        <div className={style.cards}>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={kamyoon} />
            <h3>Kamyoon</h3>
            <p>
              Web Tasarım, Web Panel, Mobil Uygulama, Marka konumlandırma, Logo
              Tasarım, UI/UX Design, Strateji geliştirme, Sosyal Medya Yönetimi,
              Video Prodüksiyon
            </p>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={nakliyeci} />
            <h3>Hangi Nakliyeci</h3>
            <p>
              Web Tasarım, Web Panel, Mobil Uygulama, Marka konumlandırma, Logo
              Tasarım, UI/UX, Strateji geliştirme, Sosyal Medya Yönetimi
            </p>
          </div>
          <div className={style.card}>
            <Image width={280} height={210} alt="" src={eYurt} />
            <h3>E-Yurt</h3>
            <p>Web Panel, Logo Tasarım</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDid;
