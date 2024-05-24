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
  height: 30px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  flex-direction: row-reverse;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 100px;
  }
`

const SocialIconLink = styled.a`
  color: inherit;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

const TopbarText = styled.p`
  color: #efa23a;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

const TopbarAddress = styled.div`
  color: #efa23a;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`
const TopbarLink = styled.a`
  color: #efa23a;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
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
        <span>Calle N40J #E14-247 y los Motilones. Urb. Gabriela Marina. sector redondel del ciclista</span>
      </TopbarAddress>
      <TopbarLink href="https://sdmconsultores.com.co/" target="_blank">
        También estamos ubicados en Colombia <FaExternalLinkAlt />
      </TopbarLink>
    </TopBar>
  )
}

export default Topbar
