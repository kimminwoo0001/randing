import Logo from "@components/Logo";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";

const Section9 = () => {
  return (
    <article className="section section__9">
      <section className="container">
        <div className="section__9__title">
          <h2>
            전략 수립과
            <br></br>
            구단관리에 최적화된
            <br></br>
            올인원 데이터 플랫폼
          </h2>
          <span className="text__logo">
            <Logo />
          </span>
        </div>
      </section>
      <div className="section__9__img"></div>
    </article>
  );
};

export default Section9;
