import Logo from "@components/Logo";
import React from "react";
import T100 from "@assets/logo/team_100.png";
import T1 from "@assets/logo/team_t1.png";
import NS from "@assets/logo/team_ns.png";
import AZYT from "@assets/logo/azyt.png";
import KESPA from "@assets/logo/kespa.png";

const Section6 = () => {
  return (
    <article className="section section__6">
      <section className="section__container">
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
          <img src={T100} alt="100" />
          <img src={T1} alt="t1" />
          <img src={NS} alt="ns" />
          <img src={AZYT} alt="azyt" />
          <img src={KESPA} alt="kespa" />
        </div>
      </section>
    </article>
  );
};

export default Section6;
