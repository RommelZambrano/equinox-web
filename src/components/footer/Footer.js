import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
         href="https://api.whatsapp.com/send?phone=593961333249&text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios."         
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />{" "}
          (+593) 96 133 3249
        </FooterLink>
      </FooterSection>
      <FooterSection>
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
  color: #EFA23A;
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
  color: #72ABFF;
  transition: 0.3s ease-out;
}
`;
  

const Copyright = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
`
