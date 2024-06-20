import React from "react";
import style from "./style.module.scss";

const Career = () => {
  return (
    <div className="container container-padding">
      <div className={style.career}>
        <h2>Kariyer</h2>

        <div className="seperator"></div>

        <p>
          Kamyoon’un kapısı bugünün ve yarının yaratıcı beyinlerine sonuna kadar
          açık. Hayallerini hayallerimizle kesiştirmek, değer yaratmak ve
          değerli hissetmek istiyorsan sen de ekibimize katıl!
        </p>

        <div className={style.buttons}>
          <a href="mailto:info@kamyoon.tech">ik@kamyoon.tech</a>
        </div>
      </div>
    </div>
  );
};

export default Career;
