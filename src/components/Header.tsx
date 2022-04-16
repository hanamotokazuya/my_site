import React from "react";
import styled from "styled-components";

const Base = styled.header`
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid;
  border-color: green;
  display: flex;
  justify-content: space-between;
`;
const LogoArea = styled.div`
  background-color: #444444;
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
const NavLink = styled.div`
  padding: 10px 15px;
  border: 1px solid;
  border-color: blue;
  cursor: pointer;
  &:hover {
    background-color: #444444;
  }
`;

function Header() {
  return (
    <Base>
      <LogoArea>
        <Logo></Logo>
        <LogoText>Kazuya Hanamoto</LogoText>
      </LogoArea>
      <Navbar>
        <NavLink>TOP</NavLink>
        <NavLink>PROFILE</NavLink>
        <NavLink>HISTORY</NavLink>
        <NavLink>PRODUCTS</NavLink>
        <NavLink>CONTACT</NavLink>
      </Navbar>
    </Base>
  );
}

export default Header;
