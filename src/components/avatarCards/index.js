import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import bekir from "@/images/avatars/bekir-sahin.png";
import fatih from "@/images/avatars/fatih-avsar.png";
import abdullah from "@/images/avatars/abdullah-sag.png";
import akif from "@/images/avatars/akif-sayin.png";
import eray from "@/images/avatars/ugur-eray-yalcin.png";
import furkan from "@/images/avatars/furkan-kocabiyik.png";
import ramazan from "@/images/avatars/ramazan-kucukkoc.png";
import gokturk from "@/images/avatars/gokturk-asmacioglu.png";

const AvatarCards = () => {
  return (
    <div className="container">
      <div className={style.avatarCards}>
        <div className={style.avatarGrp}>
          <a
            href="https://www.linkedin.com/in/benbekirsahin/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={bekir} />
            <div className={style.name}>
              <p>Bekir Şahin</p>
              <span>Brand Manager</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ugurerayyalcin/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={eray} />
            <div className={style.name}>
              <p>Uğur Eray Yalçın</p>
              <span>Video Editor</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/gokturkasmacioglu/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={gokturk} />
            <div className={style.name}>
              <p>Göktürk Asmacıoğlu</p>
              <span>Graphic Designer</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ffurkan/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={furkan} />
            <div className={style.name}>
              <p>Fatih Furkan Kocabıyık</p>
              <span>Front-End Developer</span>
            </div>
          </a>
        </div>

        <div className={style.avatarGrp}>
          <a
            href="https://www.linkedin.com/in/fatih-avsar/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={fatih} />
            <div className={style.name}>
              <p>Fatih Avşar</p>
              <span>Mobile App Developer</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-sag/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={abdullah} />
            <div className={style.name}>
              <p>Abdullah Sağ</p>
              <span>Front-End Developer</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hacker--/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={akif} />
            <div className={style.name}>
              <p>Akif Sayın</p>
              <span>Cyber Security </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ramazan-k%C3%BC%C3%A7%C3%BCkko%C3%A7-16841b203/"
            className={style.avatar}
          >
            <Image width={90} height={90} alt="" src={ramazan} />
            <div className={style.name}>
              <p>Ramazan Küçükkoç</p>
              <span>Back-End Developer</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarCards;
