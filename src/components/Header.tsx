import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import styled from "styled-components";
import logoImg from "../imgs/my-logo.png";
import { tab, sp } from "../utils/media";
import { GiHamburgerMenu } from "react-icons/gi";
import { CSSTransition } from "react-transition-group";

function Header() {
  const { setPage } = useContext(AppContext);
  const [isOpenHam, setIsOpenHam] = useState(false);
  return (
    <Base>
      <Logo>
        <img src={logoImg} className="logo" />
        <p className="logo-text">Kazuya&#39;s portfolio</p>
      </Logo>
      <Nav>
        <ul>
          <li onClick={() => setPage("TOP")}>TOP</li>
          <li onClick={() => setPage("PROFILE")}>PROFILE</li>
          <li onClick={() => setPage("PRODUCTS")}>PRODUCTS</li>
          <li onClick={() => setPage("CONTACT")}>CONTACT</li>
        </ul>
      </Nav>
      <Hamburger>
        <GiHamburgerMenu className="icon" onClick={() => setIsOpenHam(!isOpenHam)} />
        <CSSTransition in={isOpenHam} timeout={600} classNames="slide" unmountOnExit>
          <ul className="menu">
            <li
              onClick={() => {
                setIsOpenHam(!isOpenHam);
                setPage("TOP");
              }}
            >
              TOP
            </li>
            <li
              onClick={() => {
                setIsOpenHam(!isOpenHam);
                setPage("PROFILE");
              }}
            >
              PROFILE
            </li>
            <li
              onClick={() => {
                setIsOpenHam(!isOpenHam);
                setPage("PRODUCTS");
              }}
            >
              PRODUCTS
            </li>
            <li
              onClick={() => {
                setIsOpenHam(!isOpenHam);
                setPage("CONTACT");
              }}
            >
              CONTACT
            </li>
          </ul>
        </CSSTransition>
        <CSSTransition in={isOpenHam} timeout={600} classNames="shadow" unmountOnExit>
          <Shadow onClick={() => setIsOpenHam(!isOpenHam)} />
        </CSSTransition>
      </Hamburger>
    </Base>
  );
}

export default Header;

const Base = styled.header`
  width: 100%;
  position: fixed;
  background-color: #444444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding-left: 50px;
  padding-right: 50px;
  height: 100px;
  ${tab`
    padding-left: 30px;
    padding-right: 30px;
    height: 50px;
  `}
  ${sp`
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
  `}
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  .logo {
    width: 32px;
    height: 32px;
    margin-right: 15px;
  }
  .logo-text {
    font-weight: bold;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  ${tab`
    display: none;
  `}
  ${sp`
    display:none;
  `}
  ul {
    display: flex;
    align-items: center;
  }
  ul > li {
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }
`;
const Hamburger = styled.div`
  display: none;
  ${tab`
    display: block;
  `}
  ${sp`
    display:block;
  `}
  .icon {
    width: 24px;
    height: 24px;
  }
  .menu {
    background-color: black;
    position: fixed;
    right: 0%;
    padding: 20px 20px 0 20px;
    font-size: 20px;
    z-index: 2;
    li {
      margin-bottom: 20px;
    }
    &.slide-enter {
      right: -50%;
    }
    &.slide-enter-active {
      right: 0%;
      transition: right 0.3s;
    }
    &.slide-exit {
      right: 0%;
    }
    &.slide-exit-active {
      right: -50%;
      transition: right 0.6s;
    }
    ${tab`
    top: 50px;
  `}
    ${sp`
    top: 40px;
  `}
  }
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  &.shadow-enter {
    opacity: 0;
  }
  &.shadow-enter-active {
    opacity: 0.2;
    transition: opacity 0.3s;
  }
  &.shadow-exit {
    opacity: 0.2;
  }
  &.shadow-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
