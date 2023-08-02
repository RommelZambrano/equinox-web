import React from "react"
import styled from "styled-components"
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkedAlt,
  FaEnvelope,
  FaExternalLinkAlt,
  FaInstagram,
} from "react-icons/fa"

const TopBar = styled.div`
  background: #000;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  flex-direction: row-reverse;
  color: #fff;
`

const SocialIconLink = styled.a`
  color: inherit;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`

const TopbarText = styled.p`
  color: #EFA23A;
`

const TopbarAddress = styled.div`
  color: #EFA23A;
`
const TopbarLink = styled.a`
  color: #EFA23A;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`

const Topbar = () => {
  return (
    <TopBar>
      <div>
        <SocialIconLink href="https://www.instagram.com/equinoxservicesec/">
          <FaInstagram size="1em" />
        </SocialIconLink>
        <SocialIconLink href="https://www.facebook.com/people/Equinox-Services/100093292205309/">
          <FaFacebook size="1em" />
        </SocialIconLink>
        <SocialIconLink href="https://www.linkedin.com/in/equinox-services-ec-570614278/">
          <FaLinkedin size="1em" />
        </SocialIconLink>
      </div>
      <TopbarText>
        {" "}
        <FaEnvelope /> asistente1@equinox-services.com
      </TopbarText>
      <TopbarAddress>
        <FaMapMarkedAlt size="1em" />
        <span> Av. 6 de Diciembre, N37-185, Edif. Mena Salazar, Piso 8</span>
      </TopbarAddress>
      <TopbarLink href="https://sdmconsultores.com.co/" target="_blank">
        También estamos ubicados en Colombia <FaExternalLinkAlt />
      </TopbarLink>
    </TopBar>
  )
}

export default Topbar
