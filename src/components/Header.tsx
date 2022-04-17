import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import styled from "styled-components";
import logoImg from "../imgs/my-logo.png";

function Header() {
  const { setPage } = useContext(AppContext);
  return (
    <Base>
      <LogoArea>
        <Logo src={logoImg} />
        <LogoText>Kazuya&#39;s portfolio</LogoText>
      </LogoArea>
      <Navbar>
        <NavBtn onClick={() => setPage("TOP")}>TOP</NavBtn>
        <NavBtn onClick={() => setPage("PROFILE")}>PROFILE</NavBtn>
        <NavBtn onClick={() => setPage("PRODUCTS")}>PRODUCTS</NavBtn>
        <NavBtn onClick={() => setPage("CONTACT")}>CONTACT</NavBtn>
      </Navbar>
    </Base>
  );
}

export default Header;

const Base = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #444444;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;
const LogoArea = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 15px;
`;
const LogoText = styled.p`
  font-weight: bold;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
const NavBtn = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    color: tomato;
  }
`;
