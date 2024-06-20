"use client";
import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import logo from "@/images/kamyoon-tech-logo.svg";
import cn from "classnames";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight <= 200) {
      return;
    }

    // Added check to handle Safari top scroll stretch issue
    if (window.scrollY <= 0) {
      setShowHeader(true);
      setHeaderBackground(false);
      return;
    }

    if (window.scrollY > lastScrollY && window.scrollY >= 200) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);

    if (window.scrollY > 50) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${style.headerContainer} ${
        showHeader ? style.show : style.hide
      } ${headerBackground ? style.whiteBackground : ""}`}
    >
      <div className={cn(style.navigationContainer)}>
        <div className={style.logoSide}>
          <Image width={150} height={40} src={logo} alt="Kamyoon Tech Logo" />
        </div>
        <div className={style.navigation}>
          <ul>
            <li>
              <a href="#biz-kimiz">Biz Kimiz?</a>
            </li>
            <li>
              <a href="#ne-yapıyoruz">Ne Yapıyoruz?</a>
            </li>
            <li>
              <a href="#neler-yaptık">Neler Yaptık?</a>
            </li>
            <li>
              <a href="#kariyer">Kariyer</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
