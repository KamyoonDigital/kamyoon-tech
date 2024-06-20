import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import web from "@/images/whatDo/web-site.png";
import ios from "@/images/whatDo/ios.png";
import kurumsal from "@/images/whatDo/kurumsal.png";
import marka from "@/images/whatDo/marka.png";
import motion from "@/images/whatDo/motion.png";
import pazarlama from "@/images/whatDo/pazarlama.png";
import seo from "@/images/whatDo/seo.png";
import sosyalmedya from "@/images/whatDo/sosyalmedya.png";
import uiux from "@/images/whatDo/uiux.png";

const WhatWeDo = () => {
  return (
    <div id="ne-yapıyoruz" className="container container-padding">
      <div className={style.whatWeDo}>
        <h2>Ne Yapıyoruz?</h2>

        <div className="seperator"></div>

        <div className={style.skills}>
          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={web} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Web Sitesi Tasarım, Yazılım Geliştirme</h3>
              <p>
                Markanızın ihtiyacına göre; benzersiz, amacına uygun tasarım ve
                özgün kod yapılarıyla estetik, profesyonel, web siteleri
                hazırlıyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={ios} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>iOS & Android Mobil Uygulama Geliştirme</h3>
              <p>
                İhtiyacınıza yönelik analizler yaparak; kullanıcı talep ve
                deneyimlerine göre native ve hybrid teknoloji ile mobil
                uygulamalar hazırlıyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={uiux} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>UX/UI Tasarım Geliştirme</h3>
              <p>
                Analizler sonucundan web sitenize gelen kullanıcılara en iyi
                deneyimi yaşatmak için etkileşime giden yolu düzenleyerek,
                yüksek geri dönüşüm getirecek ara yüzler geliştiriyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={seo} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>SEO (Arama Motoru Optimizasyonu)</h3>
              <p>
                Web sitenizin arama motorları üzerindeki sonuçlarını
                iyileştirip; marka bilinirliğinizi ve satış dönüşümlerini
                artıyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={marka} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Yaratıcı Strateji ve Marka Konumlandırma</h3>
              <p>
                Markanızın duruşunu tüketici nezdinde fark yaratacak yeni
                trendlere uygun olarak tasarlıyoruz. Oluşturacağımız kreatif ve
                stratejik yol haritası üzerinden mecralara özgün projeler
                yaratıyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={pazarlama} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Dijital Pazarlama Stratejisi, Yönetimi</h3>
              <p>
                Ürün ve hizmetlerinizi dijital mecralarda doğru zaman doğru
                kitleler tarafından görüntülenmesini sağlayarak maksimum
                etkileşim ve geri dönüş sağlıyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={sosyalmedya} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Sosyal Medya Yönetimi, Strateji ve İçerik Geliştirme</h3>
              <p>
                Sosyal medya mecralarının doğasına uygun olarak hazırlanan
                strateji ve içerikler ile takipçiler ile bağ kurarak marka
                bilinirliğinize değer katıp; kreatif projeler geliştiriyoruz.
                dijital stratejiyi geliştiriyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={kurumsal} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Kurumsal Kimlik</h3>
              <p>
                Kreatif bakış açımız ile marka ruhunu, iletişim tonunu,
                kimliğini, karakterini oluştururken; markanızı daha üst
                seviyelere çıkarmak adına veriler ışında kurumsal kimliğinizi
                oluşturuyoruz.
              </p>
            </div>
          </div>

          <div className={style.skillItem}>
            <div className={style.icon}>
              <Image src={motion} alt="" width={21} height={21} />
            </div>
            <div className={style.desc}>
              <h3>Motion Grafik Geliştirme</h3>
              <p>
                Geliştirilen konsept, senaryo, seslendirmeye uygun olarak
                estetik ve yaratıcı görsel tasarımları stratejinize ve marka
                kimliğinize göre oluşturuyor ve hareketlendiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
