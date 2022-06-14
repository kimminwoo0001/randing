import Logo from "@components/Logo";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__header">
          <a href="#" className="footer__logo">
            <Logo />
          </a>
          <ul className="footer__list">
            <li>
              <a href="">이용약관</a>
            </li>
            <li>
              <a href="">개인정보처리방침</a>
            </li>
          </ul>
        </div>

        <p className="footer__text">
          2021 TeamSnowball CORP. teamsnowball@teamsnowball.com Snow View is
          hosted by TeamSnowball. Snow View isn’t endorsed by Riot Games and
          doesn’t reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing League of Legends. League
          of Legends and Riot Games are trademarks or registered trademarks of
          Riot Games, Inc. League of Legends © Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
