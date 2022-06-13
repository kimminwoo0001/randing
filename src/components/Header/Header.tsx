import Logo from "@components/Logo";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);
  const onOpen = () => setIsOpen(true);
  return (
    <header className="header">
      {/* 로고 */}
      <div className="header__left">
        <a className="header__logo" href="/">
          <Logo />
        </a>
      </div>

      {/* 오른쪽 */}
      <div className="header__right">
        <a
          className="btn btn-gradient btn-md btn-r-20 header__button"
          href="#none"
        >
          도입문의
        </a>
        <div className="header__trigger">
          <button
            className={`btn btn-trigger ${isOpen ? "is-open" : ""}`}
            onClick={onToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
