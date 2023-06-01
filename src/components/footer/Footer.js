import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Equinox Services</FooterTitle>
        <FooterDesc>
          Equinox Services es una empresa de servicios contables, tributarios y financieros.
        </FooterDesc>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contactanos</FooterTitle>
        <FooterLink
          href="tel:+593234569789"
          target="_blank"
          rel="noopener noreferrer"
        >
          +593 234-569-789
        </FooterLink>
      </FooterSection>
      <FooterSection style={{ alignItems: "flex-start" }}>
        <FooterTitle>Redes sociales</FooterTitle>
        <FooterLink
          href="https://www.instagram.com/equinoxservicesec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />{" "}
          Instagram
          
        </FooterLink>
        <FooterLink
          href="https://www.facebook.com/people/Equinox-Services/100093292205309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />{" "}
          Facebook
          
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/equinox-services-ec-570614278/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />{" "}
           Linkedin
        </FooterLink>
      </FooterSection>
      <Copyright>Equinox © {year} Todos los derechos reservados.</Copyright>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  background: #000;
  color: #fff;
  padding: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

const FooterTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f26a2e;
`

const FooterDesc = styled.p`
  margin-bottom: 2rem;
  max-width: 400px; /* Agrega el ancho máximo deseado */

`

const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-bottom: 0.5rem;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

const Copyright = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
`
