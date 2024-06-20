import React from "react";
import style from "./style.module.scss";
import logo from "@/images/footer-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container">
      <div className={style.footer}>
        <Image src={logo} width={100} height={20} alt="" />
        <p>Tüm Hakları Saklıdır.</p>
      </div>
    </div>
  );
};

export default Footer;
