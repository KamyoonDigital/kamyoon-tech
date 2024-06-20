import React from "react";
import style from "./style.module.scss";

const TextSection = () => {
  return (
    <div id="biz-kimiz" className="container container-padding">
      <div className={style.textBox}>
        <div className={style.title}>
          <h2>Biz Kimiz?</h2>
        </div>

        <div className="seperator"></div>

        <div className={style.main}>
          <h3>Lojistik Sektöründe Dijital Dönüşümün Lideri</h3>
          <p>
            Dijitalleşmenin lojistik sektöründe de kaçınılmaz bir gerçek
            olduğunu biliyoruz. Bu nedenle, lojistik operasyonlarınızı optimize
            eden, sektördeki tüm paydaşları bir araya getiren ve dijitalleşmeye
            katkıda bulunan yenilikçi çözümler sunmaya odaklandık.
          </p>
          <p>
            Hem yazılım şirketi hem de dijital ajans kimliğimizle, lojistik
            firmalarının dijitalleşme sürecini profesyonelce yönetiyoruz.
            Geliştirdiğimiz güçlü platformlar sayesinde, lojistik
            operasyonlarınızı uçtan uca dijitalleştirebilir ve optimize
            edebilirsiniz.
          </p>
          <p>Dijital dönüşüm ile:</p>

          <ul className={style.list}>
            <li>Verimliliğinizi artırın</li>
            <li>Maliyetlerinizi düşürün</li>
            <li>Müşteri memnuniyetini yükseltin</li>
            <li>Rekabette öne geçin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
