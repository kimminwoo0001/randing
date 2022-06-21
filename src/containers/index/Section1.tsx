import { graphql } from "gatsby";
import React from "react";
import { Trans, useTranslation, withTranslation } from "react-i18next";

const Section1 = (props: any) => {
  const { t } = useTranslation();

  return (
    <article className="section section__1">
      <section className="container">
        <div className="section__1__title">
          <h1>
            데이터 스노우볼을
            <br />
            굴리세요
          </h1>

          <p>
            정확한 데이터를 이용해 승리하는 전략을 수립하고 좋은 선수를 데이터에
            기반해 영입하세요.
          </p>
        </div>
        <div className="lg-only section__1__button btn btn-gradient">
          <a href="#">도입문의</a>
        </div>
      </section>
    </article>
  );
};

export default Section1;
