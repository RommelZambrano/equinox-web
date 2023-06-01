import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Equinox</FooterTitle>
        <FooterDesc>
          Somos una empresa dedicada a la venta de productos de belleza y
          cuidado personal.
        </FooterDesc>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contactanos</FooterTitle>
        <FooterLink to="/">+593 234-569-789</FooterLink>
      </FooterSection>
      <FooterSection style={{ alignItems: 'flex-start' }}>
        <FooterTitle>Redes sociales</FooterTitle>
        <FooterLink to="https://www.instagram.com/equinoxservicesec/">Instagram</FooterLink>
        <FooterLink to="https://www.facebook.com/people/Equinox-Services/100093292205309/">Facebook</FooterLink>
        <FooterLink to="https://www.linkedin.com/in/equinox-services-ec-570614278/">Linkedin</FooterLink>
      </FooterSection>
      <Copyright>Equinox © {year} Todos los derechos reservados.</Copyright>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  background: #000;
  color: #fff;
  padding: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f26a2e;
`;

const FooterDesc = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-bottom: 0.5rem;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
`;

