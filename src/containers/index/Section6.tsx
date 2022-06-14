import Logo from "@components/Logo";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Section6 = () => {
  return (
    <article className="section section__6">
      <section className="container">
        <div className="section__6__title">
          <h2>
            <span>여러팀들이 이미</span>

            <span className="text__logo">
              <Logo /> 를
            </span>

            <span>사용하고 있습니다.</span>
          </h2>
        </div>

        <div className="section__6__img">
          <img src="/images/logo/team_100.png" alt="100" />
          <img src="/images/logo/team_t1.png" alt="t1" />
          <img src="/images/logo/team_ns.png" alt="ns" />
          <img src="/images/logo/azyt.png" alt="azyt" />
          <img src="/images/logo/kespa.png" alt="kespa" />
        </div>
      </section>
    </article>
  );
};

export default Section6;
