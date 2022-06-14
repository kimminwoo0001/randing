import Logo from "@components/Logo";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);
  const onOpen = () => setIsOpen(true);
  return (
    <header className="header">
      <div className="container">
        {/* 로고 */}
        <div className="header__left">
          <a className="header__logo" href="/">
            <Logo />
          </a>
        </div>

        {/* 오른쪽 */}
        <div className="header__right">
          <a className="header__login lg-only" href="">
            로그인
          </a>
          <a
            className="btn btn-gradient btn-md btn-r-20 header__button"
            href="#none"
          >
            도입문의
          </a>
          <div className="header__trigger lg-hidden">
            <button
              className={`btn btn-trigger ${isOpen ? "is-open" : ""}`}
              onClick={onToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="header__language lg-only">
            <ul className="header__language__list">
              <li className="header__language__list__item">
                <a href="">한국어</a>
              </li>
              <li className="header__language__list__item">
                <a href="">ENG</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`header__expand lg-hidden ${isOpen ? "is-active" : ""}`}>
        <div className="container">
          <ul className="header__expand__list">
            <li className="header__expand__list__item">
              <a href="">로그인</a>
            </li>
            <li className="header__expand__list__item">
              <a className="header__expand__list__item__language" href="#">
                한국어
              </a>
              <a className="header__expand__list__item__language" href="#">
                ENG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
