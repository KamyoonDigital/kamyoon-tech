import React from "react";
import style from "./style.module.scss";
import ContactMap from "../contactMap";

const Contact = () => {
  return (
    <div className="container container-padding">
      <div className={style.contact}>
        <h2>İletişim</h2>

        <div className="seperator"></div>
        <div className={style.contactMain}>
          <div className={style.locatioCards}>
            <div className={style.location}>
              <p>BALIKESİR</p>
              <span>Balıkesir Üniversitesi Çağış Yerleşkesi</span>
              <span>Teknokent No:3/9 Altıeylül/Balıkesir</span>
              <span>Balıkesir / TÜRKİYE</span>

              <a href="tel:444 6 043">T: 444 6 043</a>
              <a href="mailto:info@kamyoon.tech">M: info@kamyoon.tech</a>
            </div>
          </div>

          <ContactMap />

          <div className={style.form}>
            <div className={style.left}>
              <p>Fikrini Gerçeğe</p>
              <span>Dönüştürmek İster Misin?</span>
            </div>
            <div className={style.right}>
              <button>Bizimle İletişime Geç!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
