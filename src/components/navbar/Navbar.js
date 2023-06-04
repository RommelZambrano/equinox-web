import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { pages } from "../../data/MenuData"
import { Button } from "../Button"
import logo from "../../images/equinox-logo.png"

const Navbar = ({ pathname }) => {
  return (
    <Nav pathname={pathname}>
      <NavLink to="/">
        <Logo src={logo} alt="Equinox" />
      </NavLink>
      <Bars />
      {/* <NavMenu> */}
      <NavMenu>
        {pages.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/contact">
          Contactanos
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: ${({ pathname }) => (pathname === "/" ? "transparent" : "rgba(0, 0, 0, 0.7)")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;

  &:hover {
    color: #EFA23A;
    border-bottom: 2px solid #EFA23A;
  }
`
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
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  width: 115px; 
  height: auto;
  flex-shrink: 0; 

  &:hover {
   border-bottom: none;

  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }

`
