import Header from "@components/Header/Header";
import Section1 from "@containers/index/section1";
import Section2 from "@containers/index/Section2";
import Section3 from "@containers/index/Section3";
import Section4 from "@containers/index/Section4";
import Section5 from "@containers/index/Section5";
import Section6 from "@containers/index/Section6";
import Section7 from "@containers/index/Section7";
import Section8 from "@containers/index/Section8";
import Section9 from "@containers/index/Section9";
import "@styles/main.scss";
import * as React from "react";

// styles

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </main>
  );
};

export default IndexPage;
