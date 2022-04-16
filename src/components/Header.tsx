import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import styled from "styled-components";

const Base = styled.header`
  width: 100%;
  height: 40px;
  position: fixed;
  padding-left: 10px;
  padding-right: 10px;
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
  background-color: blue;
`;
const LogoText = styled.p`
  font-weight: bold;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
const NavLink = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #666666;
  }
`;

function Header() {
  const { setPage } = useContext(AppContext);
  return (
    <Base>
      <LogoArea>
        <Logo></Logo>
        <LogoText>Kazuya Hanamoto</LogoText>
      </LogoArea>
      <Navbar>
        <NavLink onClick={() => setPage("TOP")}>TOP</NavLink>
        <NavLink onClick={() => setPage("PROFILE")}>PROFILE</NavLink>
        <NavLink onClick={() => setPage("PRODUCTS")}>PRODUCTS</NavLink>
        <NavLink onClick={() => setPage("CONTACT")}>CONTACT</NavLink>
      </Navbar>
    </Base>
  );
}

export default Header;
