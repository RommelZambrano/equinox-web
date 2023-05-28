import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { pages } from "../../data/MenuData"
import { Button } from "../Button"

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Equinox</NavLink>
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
              <Button>Contact Us</Button>
            </NavBtn>
      </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
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
    color: #1abc9c;
    transform: rotate(90deg);
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`
