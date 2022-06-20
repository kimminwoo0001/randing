import React from "react";

const Section7 = () => {
  return (
    <article className="section section__7">
      {/* 전체이미지 섹션 */}
      <div className="section__7__title">
        <h2>
          디테일한
          <br />
          선수 지표
        </h2>
      </div>

      {/*  */}
      <section className="container">
        <div className="section__7__desc__container">
          <div className="section__7__desc">
            <h4>성향지표</h4>
            <p>
              팀과 선수의 성향에 관한 지표를 제공합니다. 우리 팀의 성향을
              파악하여 부족한 선수 성향을 찾고 그것을 보완할 수 있는 선수들을
              발굴하여 영입에 반영할 수 있습니다.
            </p>
          </div>

          <div className="section__7__desc">
            <h4>선수성적 추세 분석</h4>
            <p>
              선수의 역할에 따라 지표가 낮은 선수지만 전략에 따라 게임의 승리에
              많이 기여 할 수도 있습니다. 다양한 데이터를 복합적으로 분석하여
              역할과 관계없이 성적을 잘 평가 할 수 있는 PR 지표를 제공합니다.
              또한 추세 분석을 통해 성장 중인지, 어떤 메타에서 잘했는지 등을
              분석하여 제공합니다.
            </p>
          </div>

          <div className="section__7__img">
            <img src="/images/section7/img2.png" alt="대회경기분석" />
          </div>

          <div className="section__7__desc mb-0">
            <h4>대회 경기 분석</h4>
            <p>
              대회경기를 분석할 때 게임시간과 일치된 상세데이터(아이템, 스킬,
              골드, 데미지 등)를 제공합니다. 다양한 이벤트(갱킹, 로밍, 오브젝트
              획득 등)를 타임라인과 함께 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Section7;
