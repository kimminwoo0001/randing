import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Section3 = () => {
  return (
    <article className="section section__3">
      <section className="section__container">
        <div className="section__3__title">
          <h2>
            Vision AI로 수집된
            <br />
            챔피언의 와드&동선 데이터
          </h2>
          <div className="section__3__img">
            <div className="section__3__img__inner"></div>
          </div>
        </div>

        {/* 갱킹 로밍 지표 */}
        <section className="section__3__subtitle">
          <span className="section__3__subtitle__label">
            <img className="icon" src="" alt="" />
            갱킹/로밍 지표
          </span>
          <h3>
            갱킹성공률
            <br />
            라인별 로밍/갱핑 빈도
            <br />
            시간대별, 라인별 로밍/갱킹 빈도
            <br />
            정글동선
            <br />
          </h3>
          <div className="section__3__subtitle__img img1"></div>
        </section>

        {/* 교전 지표 */}
        <section className="section__3__subtitle ">
          <span className="section__3__subtitle__label">
            <img className="icon" src="" alt="" />
            교전 지표
          </span>
          <h3>
            교전 참여율
            <br />
            평균 교전 참여시간
            <br />
            시간대별 교전승률
            <br />
            오브젝트별 교전
            <br />
          </h3>
          <div className="section__3__subtitle__img img2"></div>
        </section>

        {/* 라인전 지표 */}
        <section className="section__3__subtitle">
          <span className="section__3__subtitle__label">
            <img className="icon" src="" alt="" />
            라인전 지표
          </span>
          <h3>
            갱 호응 성공률
            <br />
            타워 허깅시간
            <br />
            라인전 위험 감수 성향
            <br />
            상대 정글 침입 시간
            <br />
          </h3>
          <div className="section__3__subtitle__img img3"></div>
        </section>

        {/* 교전 지표 */}
        <section className="section__3__subtitle">
          <span className="section__3__subtitle__label">
            <img className="icon" src="" alt="" />
            교전 지표
          </span>
          <h3>
            라인별 시팅 지수
            <br />
            서포트 받은 시간
            <br />
            텔레포트 사용 성향
            <br />
            와드 설치 패턴
            <br />
          </h3>
          <div className="section__3__subtitle__img img4"></div>
        </section>
      </section>
    </article>
  );
};

export default Section3;
