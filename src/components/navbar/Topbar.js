import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { pages } from "../../data/MenuData"
import { Button } from "../Button"
import logo from "../../images/equinox-logo.png"

const TopBar = styled.div`
  background: #f8f9fa;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
`;

const TopBarLink = styled.a`
  color: #333;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Nav = styled.nav`
  background: ${({ pathname }) =>
    pathname === "/" ? "transparent" : "rgba(0, 0, 0, 0.7)"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const NavItem = styled.span`
  color: #fff;

  &:hover {
    color: #efa23a;
    border-bottom: 2px solid #efa23a;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    order: 2;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  font-size: 1.2rem;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    left: 0;
    opacity: 0.95;
    background: #101522;
    transition: 0.5s;
    order: 2;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    justify-content: left-center;
    margin-left: 10px; // Ajusta este valor a tu gusto
    width: 100%;
    margin-right: 0;
  }
`;

const Logo = styled.img`
  width: 115px;
  height: auto;
  flex-shrink: 0;

  &:hover {
    border-bottom: none;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: auto;
    flex-shrink: 0;
  }
`;

const Navbar = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
    
  return (
    <>
      <TopBar>
        <TopBarLink href="https://twitter.com/RommelZambrano">Twitter</TopBarLink>
        <TopBarLink href="mailto:info@equinox-services.com">Contacto</TopBarLink>
      </TopBar>
      <Nav pathname={pathname}>
        <LogoLink to="/">
          <Logo src={logo} alt="Equinox" />
        </LogoLink>
        <Bars onClick={toggleMenu} />
        <NavMenu isOpen={isOpen}>
          {pages.map((item, index) => (
            <NavLink to={item.link} key={index}>
              <NavItem>{item.title}</NavItem>
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/contact">
            Contactanos
          </Button>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
 